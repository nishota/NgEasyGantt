import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicGanttComponent } from '../component/basic-gantt/basic-gantt.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicGanttComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
