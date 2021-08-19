import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  loadQuestionJsonData() : Observable<Question[]> {
    return this.http.get<Question[]>("assets/quiz.json");
  }

}
