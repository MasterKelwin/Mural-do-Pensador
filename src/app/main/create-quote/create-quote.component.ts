import { QuotesService } from '../../../services/quotes.service';
import { Quote } from './../../models/quotes.models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss']
})
export class CreateQuoteComponent implements OnInit {

  thought: Quote = {
    content: '',
    author: '',
    model: ''
  }

  saveData() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/quotes']);
    });
    this.cleanFields();
  }

  cleanFields() {
    this.thought.content = '';
    this.thought.author = '';
    this.thought.model = '';
  }

  constructor(
    private service: QuotesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
}


// 1 componente pra excluir
// criar aparencia modal com 2 botoes, excluir e cancelar
