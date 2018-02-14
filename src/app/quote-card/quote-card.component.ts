import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote/quote.service';
import {Quote} from '../quote-class/quote'

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {
  public quote = new Quote('', '');
  constructor(public quoteService : QuoteService) {
    this.getQuote();
   }


  public getQuote(){
    this.quoteService.getRandomQuote().subscribe((data: Quote) => {
      this.quote = new Quote(data.quote, data.author);
      console.log(this.quote);
    });
  }
  ngOnInit() {
  }

}
