import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Country } from '@model/country.model';

@Injectable({
  providedIn: 'root'})
export class CountryService {

  private countries: Array<Country> = [{id: '+47', name: 'Norge'}, {id: '+46', name: 'Sverige'}, {id: '+45', name: 'Danmark'}];

  public getCountries(): Observable<Array<Country>> {
    return of([...this.countries]);
  }

  public getCountry(id: string): Observable<Country> {
    return of(this.countries.find(o => o.id === id))
      .pipe(delay(1000));
  }
}
