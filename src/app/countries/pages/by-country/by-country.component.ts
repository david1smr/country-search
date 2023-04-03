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

  public suggestedCountries: Country[] = [];
  public showSuggestions: boolean = false;

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
    this.term = term;

    this.showSuggestions = term !== '' ? true : false;
    
    this.countryService.searchCountryByName(term)
      .subscribe(
        {
          next: (countries) => {
            this.suggestedCountries = countries.splice(0,5);
          },
          error: (err) => {
            this.suggestedCountries  = [];
          }
        })
  }

  searchSuggested(term: string) {
    this.search(term);
    this.showSuggestions = false;
  }

}