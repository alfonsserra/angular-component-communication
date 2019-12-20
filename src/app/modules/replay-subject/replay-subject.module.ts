import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReplaySubjectSampleComponentComponent } from './sample-component/sample-component.component';
import { CardComponent } from './sample-component/card/card.component';



@NgModule({
  declarations: [
    CardComponent,
    ReplaySubjectSampleComponentComponent
  ],
  exports: [
    ReplaySubjectSampleComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class ReplaySubjectModule { }
