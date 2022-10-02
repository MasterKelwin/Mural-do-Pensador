import { Quote } from './../app/models/quotes.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Quote[]>(this.API);
  }

}
