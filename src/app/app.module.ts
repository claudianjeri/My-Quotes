import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http/src/client';
import { QuoteComponent } from './quote/quote.component';
import { QuoteService } from '../app/services/quote.service';
import { QuoteFormComponent } from './quote-form/quote-form.component';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
   

  ],
  
   imports: [
     BrowserModule,
    HttpClientModule,
      FormsModule,
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
