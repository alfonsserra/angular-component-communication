import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReplaySubjectSampleComponentComponent } from './sample-component/sample-component.component';
import { CardComponent } from './sample-component/card/card.component';
import { SuiteContextService } from './services/suite-context.service';
import { FormsModule } from '@angular/forms';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    CardComponent,
    ReplaySubjectSampleComponentComponent
  ],
  exports:      [
    ReplaySubjectSampleComponentComponent
  ],
  imports:      [
    BrowserModule,
    FormsModule
  ],
  providers:    [
    SuiteContextService,
    CountryService]
})
export class ReplaySubjectModule {
}
