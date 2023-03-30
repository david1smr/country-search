import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {
  public term: string = '';
  public hasError: boolean = false;
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    this.hasError = false;
    this.term = term;
    this.countryService.searchCountryByRegion(term)
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
