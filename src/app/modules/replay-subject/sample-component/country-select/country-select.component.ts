import { Component, OnInit } from '@angular/core';
import { Country } from '@model/country.model';
import { CountryService } from '../../services/country.service';
import { SuiteContextService } from '../../services/suite-context.service';

@Component({
  selector:    'app-country-select',
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent implements OnInit {

  public selectedOption: string;

  public countries: Array<Country>;

  constructor(private countryService: CountryService, private context: SuiteContextService) {
  }

  public ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe((countries) => this.countries = countries);
  }

  public doSetCountry() {
    this.countryService.getCountry(this.selectedOption)
      .subscribe(country => this.context.setCurrentCountry(country),
        (error) => console.log('error'),
        () => console.log('complete'));
  }


}
