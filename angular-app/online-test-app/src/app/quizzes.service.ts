import { Injectable } from '@angular/core';
import Quiz from './quiz.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private http : HttpClient) { }

  loadData(): Observable<Quiz[]>
  {
    return this.http.get<Quiz[]>("/assets/quizzes.json");
  }
}
