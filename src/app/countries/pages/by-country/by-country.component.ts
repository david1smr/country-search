import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

  public term: string = '';
  public hasError: boolean = false;
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.hasError = false;
    this.term = term;
    this.countryService.searchCountryByName(term)
      .subscribe({
        next: (data) => {
          this.countries = data;
        },
        error: (err) => {
          this.hasError = true;
          this.countries = [];
        }
      })
  }

  sugestions(term: string) {
    this.hasError = false;
  }

}