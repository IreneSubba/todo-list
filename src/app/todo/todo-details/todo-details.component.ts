import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  title:string;
  year:Date;
desc:string;
  
  
  
  constructor() { }

 
  
  
  
  
    ngOnInit(): void {
  }

}