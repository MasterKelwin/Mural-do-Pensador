import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  thoughts = [{
    content: 'Só sei que nada sei',
    author: 'Sócrates',
    model: 'model2'
  },
  {
    content: 'Só sei que nada sei',
    author: 'Sócrates',
    model: 'model1'
  },
  {
    content: 'Só sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada sei',
    author: 'Sócrates',
    model: 'model3'
  },
  {
    content: 'Só sei que nada sei',
    author: 'Sócrates',
    model: 'model2'
  },
  {
    content: 'Só sei que nada sei',
    author: 'Sócrates',
    model: 'model2'
  },
  {
    content: 'Só sei que nada sei',
    author: 'Sócrates',
    model: 'model1'
  },
  {
    content: 'Só sei que nada sei',
    author: 'Sócrates',
    model: 'model2'
  },
  {
    content: 'Só sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada seiSó sei que nada sei',
    author: 'Sócrates',
    model: 'model3'
  },
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
