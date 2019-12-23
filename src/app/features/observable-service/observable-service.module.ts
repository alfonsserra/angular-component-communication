import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ObservableServiceSampleComponent } from './sample-component/sample-component.component';
import { CardComponent } from './sample-component/card/card.component';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { CountrySelectComponent } from './sample-component/country-select/country-select.component';

@NgModule({
  declarations: [
    CardComponent,
    ObservableServiceSampleComponent,
    CountrySelectComponent
  ],
  exports:      [
    ObservableServiceSampleComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule
  ],
  providers:    [
    DataService]
})
export class ObservableServiceModule {
}
