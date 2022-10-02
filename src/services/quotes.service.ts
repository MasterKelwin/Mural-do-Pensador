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

  list(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.API);
  }

}
