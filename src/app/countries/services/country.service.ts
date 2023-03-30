import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  searchCountryByCapital (term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url);
  }
  
  searchCountryByName (term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`
    return this.http.get<Country[]>(url);
  }

  searchCountryByRegion (term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${term}`
    return this.http.get<Country[]>(url);
  }

  searchCountryByCode (term: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${term}`
    return this.http.get<Country>(url);
  }

}
