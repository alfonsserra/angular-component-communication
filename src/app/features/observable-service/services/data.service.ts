import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Country } from '@model/country.model';

@Injectable()
export class DataService {

  private readonly currentCountrySubject = new ReplaySubject<Country>(1);

  public readonly currentCountry$ = this.currentCountrySubject.asObservable();

  public setCurrentCountry(country: Country): void {
    this.currentCountrySubject.next(country);
  }
}
