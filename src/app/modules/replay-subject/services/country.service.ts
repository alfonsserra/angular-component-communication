import { Injectable } from '@angular/core';
import { Country } from '@model/country.model';

@Injectable()
export class CountryService {

  private countries: Array<Country> = [{id: '+47', name: 'Norge'}, {id: '+46', name: 'Sverige'}, {id: '+45', name: 'Danmark'}];

  public getCountries(): Array<Country> {
    return [...this.countries];
  }

  public getCountry(id: string): Country {
    return this.countries.find(o => o.id === id);
  }
}
