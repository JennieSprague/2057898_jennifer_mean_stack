import { Question } from './../question.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  questionData:Array<Question>=[];
  flag:boolean = false;

  constructor(public question:DataService) { }

  ngOnInit(): void {
  }

  start(){
    this.flag = true;
    this.question.loadQuestionJsonData().subscribe(data=>this.questionData=data,
      error=>console.log(error),()=>console.log("completed"))
  }
}
