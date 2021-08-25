import { Question } from './../question.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { resourceLimits } from 'worker_threads';


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
    console.log("submitted");
    let score=0;
    let ele = document.getElementsByTagName("input");
    let i = 0;
    let qNum = 0;
    for (i = 0; i < ele.length; i++){
      if(ele[i].type="radio"){
        if (ele[i].checked){
          let result = document.getElementById("result") || null;
          if (result != null) {
            result.innerHTML += qNum + " " + ele[i].name + " : " + ele[i].value +"<br>";
            if(this.questionData[qNum].correctAns == ele[i].value){
              score++;
              result.innerHTML += ele[i].name + " is correct <br>";
            }
            else{
              console.log(this.questionData[qNum].correctAns);
              result.innerHTML += "Missed " + ele[i].name + "<br>";
              result.innerHTML += "Correct answer is " + this.questionData[qNum].correctAns + "<br>";
              //console.log(this.questionData[0].ans1);
            }
            qNum++;
          }
        }

      }

    }
    let result = document.getElementById("result") || null;
    if (result != null) result.innerHTML += "Score is " + score + "/10";
  }
}
