import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SuiteContextService } from '../../services/suite-context.service';
import { Organization } from '@model/organization.model';
import { Subscription } from 'rxjs';

@Component({
  selector:    'app-card',
  templateUrl: './card.component.html',
  styleUrls:   ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  @Input() public identifiedBy: string;

  @Output() public add = new EventEmitter<string>();
  public organization: Organization;

  constructor(private context: SuiteContextService) {
  }

  public ngOnInit(): void {
    this.subscription = this.context.currentOrg$.subscribe((a) => {
      this.organization = a;
      console.log('component ' + this.identifiedBy + ' gets new value ' + a.id);
    });
    console.log('ngOnInit ' + this.identifiedBy);
  }

  public doClick() {
    this.add.emit(this.identifiedBy);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('ngOnDestroy ' + this.identifiedBy);
  }
}
