import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../dto/country';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private http: HttpClient) { }

  findAllCountries(): Observable<Country> {
    return this.http.get<Country>('http://localhost:8080/rest/v2/showCountries');
  }

  addCountry(country: Country): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/rest/v2/addCountry', country);
  }

  updateCountry(name, country: Country): Observable<boolean> {
    return this.http.put<boolean>('http://localhost:8080/rest/v2/update/' + name, country);
  }

  getCountryByName(name: string): Observable<Country> {
    return this.http.get<Country>('http://localhost:8080/rest/v2/getCountry' + name);
  }

  deleteCountryByName(name: string): Observable<any> {
    console.log(name);
    return this.http.delete('http://localhost:8080/rest/v2/deleteCountry/' + name);


  }

}
