import { Quote } from './../app/models/quotes.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  read(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.API);
  }

  create(thought: Quote): Observable<Quote> {
    return this.http.post<Quote>(this.API, thought);
  }

  delete(id: number): Observable<Quote> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Quote>(url);
  }

  update(thought: Quote): Observable<Quote> {
    const url = `${this.API}/${thought.id}`
    return this.http.put<Quote>(url, thought);
  }

  findById(id: number): Observable<Quote> {
    console.log(id)
    const url = `${this.API}/${id}`;
    return this.http.get<Quote>(url);
  }
}
