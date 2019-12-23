import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { Country } from '@model/country.model';

@Component({
  selector:    'app-card-for-observable-service',
  templateUrl: './card.component.html',
  styleUrls:   ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  @Input() public identifiedBy: string;

  @Output() public remove = new EventEmitter<string>();
  public country: Country;

  constructor(private dataService: DataService) {
  }

  public ngOnInit(): void {
    this.subscription = this.dataService.currentCountry$.subscribe(o => this.setCountry(o));
    console.log('ngOnInit ' + this.identifiedBy);
  }

  private setCountry(country: Country): void {
    this.country = country;
    console.log('component ' + this.identifiedBy + ' gets new value ' + country.id);
  }

  public doRemove(): void {
    this.remove.emit(this.identifiedBy);
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('ngOnDestroy ' + this.identifiedBy);
  }
}
