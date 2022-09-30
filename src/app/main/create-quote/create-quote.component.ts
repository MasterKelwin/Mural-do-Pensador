import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Só sei que nada sei',
    author: 'Sócrates',
    model: ''
  }

  constructor() { }

  ngOnInit(): void {
  }


}


// atributo dados
// property bind [no html]
// mudando conteúdo prévia
