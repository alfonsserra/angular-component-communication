import { Component, OnInit } from '@angular/core';
import { Country } from '@model/country.model';
import { DataService } from '../../services/data.service';
import { CountryService } from '@api/country.service';

@Component({
  selector:    'app-country-select-for-observable-service',
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent implements OnInit {

  public selectedOption: string;

  public countries: Array<Country>;

  constructor(private countryService: CountryService, private dataService: DataService) {
  }

  public ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe((countries) => this.countries = countries);
  }

  public doSetCountry() {
    this.countryService.getCountry(this.selectedOption)
      .subscribe(country => this.dataService.setCurrentCountry(country),
        (error) => console.log('error'),
        () => console.log('complete'));
  }


}
