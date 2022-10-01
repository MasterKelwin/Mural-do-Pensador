import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrls: ['./card-quote.component.scss']
})
export class CardQuoteComponent implements OnInit {

  thought = {
    content: 'Só sei que nada sei',
    author: 'Sócrates',
    model: 'model1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
