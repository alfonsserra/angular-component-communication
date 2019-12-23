import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';
import { ObservableServiceModule } from './features/observable-service/observable-service.module';
import { EventBusServiceModule } from './features/event-bus-service/event-bus-service.module';
import { InputOutputModule } from './features/input-output/input-output.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    ObservableServiceModule,
    EventBusServiceModule,
    InputOutputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
