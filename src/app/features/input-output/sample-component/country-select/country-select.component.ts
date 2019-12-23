import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Country } from '@model/country.model';
import { CountryService } from '@api/country.service';

@Component({
  selector:    'app-country-select-for-input-output',
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent implements OnInit {

  @Output() public select = new EventEmitter<Country>();
  public selectedOption: string;

  public countries: Array<Country>;

  constructor(private countryService: CountryService) {
  }

  public ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe((countries) => this.countries = countries);
  }

  public doSetCountry() {
    this.countryService.getCountry(this.selectedOption)
      .subscribe((country => this.select.emit(country)));
  }

}
