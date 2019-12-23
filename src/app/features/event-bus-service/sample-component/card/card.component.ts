import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Events, EventBusService } from '../../services/event-bus.service';
import { Subscription } from 'rxjs';
import { Country } from '@model/country.model';

@Component({
  selector:    'app-card-for-event-bus',
  templateUrl: './card.component.html',
  styleUrls:   ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  @Input() public identifiedBy: string;

  @Output() public remove = new EventEmitter<string>();
  public country: Country;

  constructor(private eventBus: EventBusService) {
  }

  public ngOnInit(): void {
    this.subscription = this.eventBus.on(Events.CountrySelected, o => this.setCountry(o));
    console.log('ngOnInit ' + this.identifiedBy);
  }

  private setCountry(country: Country) {
    this.country = country;
    console.log('component ' + this.identifiedBy + ' gets new value ' + country.id);
  }

  public doRemove() {
    this.remove.emit(this.identifiedBy);
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('ngOnDestroy ' + this.identifiedBy);
  }
}
