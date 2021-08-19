import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { isJSDocNameReference } from 'typescript';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskRef = new FormGroup({
    
  });
  tasks:Array<Task>=new Array();
  user?:string=""

  constructor(public activeRoute:ActivatedRoute) { 
    this.activeRoute.params.subscribe(data=>this.user=data.uname);
  } 
  ngOnInit(): void {
  }

  addTask(id:string, username:string, task:string, deadline:string){
    let newTask = new Task(id, username, task, deadline);
      this.tasks.push(newTask);
  }
  
  reset(){
    
  }
  // addTask(){
  //   let newTask = this.taskRef;
  // }
}
