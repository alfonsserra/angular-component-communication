import { Component, OnDestroy, OnInit } from '@angular/core';
import { Country } from '@model/country.model';
import { Events, EmitEvent, EventBusService } from '../../services/event-bus.service';
import { CountryService } from '@api/country.service';
import { Subscription } from 'rxjs';

@Component({
  selector:    'app-country-select-for-event-bus',
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  public selectedOption: string;

  public countries: Array<Country>;

  constructor(private countryService: CountryService, private eventbus: EventBusService) {
  }

  public ngOnInit(): void {
    this.subscription.add(this.countryService.getCountries()
      .subscribe((countries) => this.countries = countries));
  }

  public doSetCountry() {
    this.subscription.add(this.countryService.getCountry(this.selectedOption)
      .subscribe(country => this.eventbus.emit(Events.CountrySelected, country),
        (error) => console.log('error'),
        () => console.log('complete')));
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
