import { Quote } from 'src/app/models/quotes.models';
import { QuotesService } from '../../../services/quotes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  thought: Quote = {
    id: 0,
    content: '',
    author: '',
    model: ''
  }

  constructor(
    private service: QuotesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    })
  }

  delete() {
    if(this.thought.id){
      this.service.delete(this.thought.id).subscribe(() => {
        this.router.navigate(['/quotes']);
      })
    }
  }

  cancel() {
    this.router.navigate(['/quotes']);
  }
}
