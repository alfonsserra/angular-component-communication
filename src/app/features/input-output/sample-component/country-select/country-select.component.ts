import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Country } from '@model/country.model';
import { CountryService } from '@api/country.service';
import { Subscription } from 'rxjs';

@Component({
  selector:    'app-country-select-for-input-output',
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  @Output() public select = new EventEmitter<Country>();
  public selectedOption: string;

  public countries: Array<Country>;

  constructor(private countryService: CountryService) {
  }

  public ngOnInit(): void {
    this.subscription.add(this.countryService.getCountries()
      .subscribe((countries) => this.countries = countries));
  }

  public doSetCountry() {
    this.subscription.add(this.countryService.getCountry(this.selectedOption)
      .subscribe((country => this.select.emit(country))));
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
