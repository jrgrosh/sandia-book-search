import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { FormsModule } from '@angular/forms';
import { CommaSeparatedPipe, DecodeHTMLPipe, DisplayResultsComponent } from './display-results/display-results.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SimpleSearchComponent,
    DisplayResultsComponent,
    CommaSeparatedPipe,
    DecodeHTMLPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
