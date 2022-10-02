import { Quote } from './../../../models/quotes.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrls: ['./card-quote.component.scss']
})
export class CardQuoteComponent implements OnInit {

  @Input() thought: Quote = {
    id: 0,
    content: '',
    author: '',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtWidth(): string {
    if(this.thought.content!.length >= 220) {
      return 'thought-g'
    }  return 'thought-p'
  }
}
