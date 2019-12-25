import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Country } from '@model/country.model';

@Injectable({
  providedIn: 'root'})
export class CountryService {

  private countries: Array<Country> = [{id: '+47', name: 'Norway'}, {id: '+46', name: 'Sweden'}, {id: '+45', name: 'Denmark'}];

  public getCountries(): Observable<Array<Country>> {
    return of([...this.countries]);
  }

  public getCountry(id: string): Observable<Country> {
    return of(this.countries.find(country => (country.id === id)))
      .pipe(delay(1000));
  }
}
