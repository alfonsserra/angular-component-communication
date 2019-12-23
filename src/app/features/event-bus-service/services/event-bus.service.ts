import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class EmitEvent {
  constructor(public name: any, public value?: any) {
  }
}

export enum Events {
  CountrySelected
}

@Injectable()
export class EventBusService {

  private readonly subject = new Subject<any>();

  on(event: Events, action: any): Subscription {
    return this.subject.pipe(
      filter((e: EmitEvent) => e.name === event),
      map((e: EmitEvent) => e.value))
      .subscribe(action);
  }

  public emit(event: Events, value?: any) {
    this.subject.next(new EmitEvent(event, value));
  }
}
