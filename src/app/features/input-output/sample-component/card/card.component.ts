import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Country } from '@model/country.model';

@Component({
  selector:    'app-card-for-input-output',
  templateUrl: './card.component.html',
  styleUrls:   ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() public identifiedBy: string;
  @Input() public country: Country;

  @Output() public remove = new EventEmitter<string>();

  constructor() {
  }

  public ngOnInit(): void {
    console.log('ngOnInit ' + this.identifiedBy);
  }

  public doRemove() {
    this.remove.emit(this.identifiedBy);
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy ' + this.identifiedBy);
  }
}
