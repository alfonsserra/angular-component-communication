import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventBusSampleComponent } from './sample-component/sample-component.component';
import { CardComponent } from './sample-component/card/card.component';
import { EventBusService } from './services/event-bus.service';
import { FormsModule } from '@angular/forms';
import { CountrySelectComponent } from './sample-component/country-select/country-select.component';

@NgModule({
  declarations: [
    CardComponent,
    EventBusSampleComponent,
    CountrySelectComponent
  ],
  exports:      [
    EventBusSampleComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule
  ],
  providers:    [
    EventBusService]
})
export class EventBusServiceModule {
}
