import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quotes.models';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  thoughts: Quote[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
