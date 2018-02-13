import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
      quote:Quote;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface ApiResponse{
      quote:string;
      author:string
    }

    this.http.get("https://talaikis.com/api/quotes/random/").subscribe(data=>{
    
  })
  }

}
