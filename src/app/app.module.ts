import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReplaySubjectModule } from './features/replay-subject/replay-subject.module';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    ReplaySubjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
