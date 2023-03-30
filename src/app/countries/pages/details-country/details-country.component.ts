import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-details-country',
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css']
})
export class DetailsCountryComponent implements OnInit{

  public country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.countryService.searchCountryByCode(param['id'])),
        tap(console.log)
      )
      .subscribe(resp => {
        this.country = resp[0];
      })
  }

}
