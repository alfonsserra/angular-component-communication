import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputOutputSampleComponent } from './sample-component/sample-component.component';
import { CardComponent } from './sample-component/card/card.component';
import { FormsModule } from '@angular/forms';
import { CountrySelectComponent } from './sample-component/country-select/country-select.component';

@NgModule({
  declarations: [
    CardComponent,
    InputOutputSampleComponent,
    CountrySelectComponent
  ],
  exports:      [
    InputOutputSampleComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule
  ],
  providers:    []
})
export class InputOutputModule {
}
