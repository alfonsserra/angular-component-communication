import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '@model/country.model';
import { Events, EventBusService } from '../../services/event-bus.service';
import { CountryService } from '@api/country.service';
import { Subscription } from 'rxjs';

@Component({
  selector:    'app-country-select-for-event-bus',
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  public countries: Array<Country>;
  public selectedOption: string;

  constructor(private countryService: CountryService, private eventBus: EventBusService) {
  }

  public ngOnInit(): void {
    this.subscription.add(this.countryService.getCountries()
      .subscribe(countries => this.countries = countries));
  }

  public doSetCountry(): void {
    this.subscription.add(this.countryService.getCountry(this.selectedOption)
      .subscribe(country => this.eventBus.emit(Events.CountrySelected, country),
        (error) => console.log('error'),
        () => console.log('complete')));
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
