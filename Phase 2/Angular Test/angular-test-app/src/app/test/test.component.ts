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
    // let ans1:boolean=false;
    // let userAns1 = document.getElementById("q01");
    // let numCorrect = 0;
    // //let a0 = document.forms["myForm"]["flexRadioDefault"].value;
    // console.log(document.forms[0][0]);
    // // if (userAns1!=null) userAns1=userAns1.checked;
    console.log("submitted");
    // console.log(this.myForm);
    // //this.myForm.
    // // let x = document.forms["quizForm"]["flexRadioDefault"].value;

    // let form = document.querySelector("form") || undefined;
    // let log = document.querySelector("#result");
    // let data = new FormData(form);
    // let output = "";
    // if (form !=undefined){
    //   for (const entry of data){
    //     output = output +entry[0]+"="+entry[1] +"\r";
    //   }
    // }
    // if (log!=null)log.innerHTML = output;
  
    // event?.preventDefault();


    let ele = document.getElementsByTagName("input");
    let i = 0;
    for (i = 0; i < ele.length; i++){
      if(ele[i].type="radio"){
        if (ele[i].checked){
          let result = document.getElementById("result") || null;
          if (result != null) result.innerHTML += ele[i].name + " ans : " + ele[i].value +"<br>";
        }

      }
    }
  }
  
}
