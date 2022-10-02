import { Router, ActivatedRoute } from '@angular/router';
import { QuotesService } from './../../../services/quotes.service';
import { Quote } from 'src/app/models/quotes.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

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

  updateThought() {
    this.service.update(this.thought).subscribe(() => {
      this.router.navigate(['/quotes'])
    })
  }

}
