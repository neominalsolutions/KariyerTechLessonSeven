import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { mergeAll, Observable, of, switchMap } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<Todo[]> {

  // https://levelup.gitconnected.com/handle-multiple-api-requests-in-angular-using-mergemap-and-forkjoin-to-avoid-nested-subscriptions-a20fb5040d0c
  
  constructor(private todoService:TodoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Todo[]> {
    console.log('todo-resolver', route, state);

    // this.todoService.getTodos().pipe(switchMap());

    
    return this.todoService.getTodos();

  }
}
