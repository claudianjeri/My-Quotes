import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http/src/client';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from '../app/quote/quote.service';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { QuoteCreateComponent } from './quote-create/quote-create.component'

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteCardComponent,
    QuoteCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
