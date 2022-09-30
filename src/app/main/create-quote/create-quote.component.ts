import { Quote } from './../../models/quotes.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  inputContent: string | undefined;
  inputAuthor: string | undefined;
  inputModel: string | undefined;

  saveData() {
    const quote: Quote = {
      content: this.inputContent,
      author: this.inputAuthor,
      model: this.inputModel }

      console.log(quote);

      this.cleanFields()
  }

  cleanFields() {
    this.inputContent = '';
    this.inputAuthor = '';
    this.inputModel = '';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
