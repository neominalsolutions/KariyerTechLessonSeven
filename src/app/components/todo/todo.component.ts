import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // constructor(private todoService:TodoService) { }

  todos2:Todo[] = [];
  todos1:Todo[] = [];

  constructor(private activatedRoute:ActivatedRoute, private todoService:TodoService) {
    
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos1 = res;
    });


    const data = this.activatedRoute.snapshot.data['todoList'];
    console.log('data', data);
    this.todos2 = [... data];
  }

}
