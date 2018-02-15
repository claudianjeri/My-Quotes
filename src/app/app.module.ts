import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http/src/client';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from '../app/quote/quote.service';
import { QuoteCreateComponent } from './quote-create/quote-create.component';
import { LogInComponent } from './log-in/log-in.component'

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
 
    QuoteCreateComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
