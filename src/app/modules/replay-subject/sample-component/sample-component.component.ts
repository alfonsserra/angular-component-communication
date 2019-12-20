import { Component, OnInit } from '@angular/core';
import { SuiteContextService } from '../services/suite-context.service';

@Component({
  selector:    'app-replay-subject-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls:   ['./sample-component.component.scss']
})
export class ReplaySubjectSampleComponentComponent implements OnInit {

  cards: Array<string> = [];
  private lastComponentId = 1;
  private lastMessageId = 1;

  constructor(private context: SuiteContextService) {
  }

  private getComponentId(): string {
    return '' + this.lastComponentId++;
  }

  private getMessageId(): string {
    return '' + this.lastMessageId++;
  }

  public ngOnInit(): void {

    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
  }

  public doSet() {
    this.context.setCurrentOrg({id: this.getMessageId(), name: Date.now() + '', logo: 'logo'});
  }

  public doAdd(): void {
    this.cards.push(this.getComponentId());
  }

  public doRemove(id: string): void {
    const index = this.cards.indexOf(id, 0);
    if (index > -1) {
      this.cards.splice(index, 1);
    }
  }
}
