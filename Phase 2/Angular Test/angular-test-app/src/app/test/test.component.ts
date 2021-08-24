import { Question } from './../question.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myForm:FormGroup;
  questionData:Array<Question>=[];
  flag:boolean = false;

  constructor(public question:DataService, private formBuilder: FormBuilder) {
    this.myForm=formBuilder.group({});
   }

  ngOnInit(): void {
  }

  start(){
    this.flag = true;
    this.question.loadQuestionJsonData().subscribe(data=>this.questionData=data,
      error=>console.log(error),()=>console.log("completed"))
  }
  submitQuiz(){
    let ans1:boolean=false;
    let userAns1 = document.getElementById("q01");
    // if (userAns1!=null) userAns1=userAns1.checked;
    console.log("submitted");
    console.log(this.myForm);
    this.myForm.
    // let x = document.forms["quizForm"]["flexRadioDefault"].value;
  }
}
