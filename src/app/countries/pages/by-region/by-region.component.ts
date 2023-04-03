import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent {
  public countries: Country[] = [];

  public regions: string [] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  public activeRegion: string = '';

  constructor(private countryService: CountryService) {}

  getClassCSS (region:string): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  acttivateRegion( region: string) {
    if (region != this.activeRegion) {
      this.activeRegion = region;
      this.search(this.activeRegion);
    }
  }

  search(term: string) {
    this.countryService.searchCountryByRegion(term)
      .subscribe({
        next: (data) => {
          this.countries = data;
        },
        error: (err) => {
          this.countries = [];
        }
      })
  }
}
