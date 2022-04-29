import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterStateService } from 'src/app/services/counter-state.service';
import { decrement, increment, reset } from 'src/app/store/counter/counter.action';

@Component({
  selector: 'app-counter-test-a',
  templateUrl: './counter-test-a.component.html',
  styleUrls: ['./counter-test-a.component.scss']
})
export class CounterTestAComponent implements OnInit {

  constructor(private counterStateService:CounterStateService, private store: Store<{ count: number }>) { }

  ngOnInit(): void {
  }

  increase() {
    // component içinden bir action fırlatıyoruz
    this.counterStateService.increase();
  }

  decrease(){
    this.counterStateService.decrase();
  }

  reset(){
    this.counterStateService.reset();
  }

  increaseRx() {
    // component içinden bir action fırlatıyoruz
    this.store.dispatch(increment())
  }

  decreaseRx(){
    this.store.dispatch(decrement());
  }

  resetRx(){
    this.store.dispatch(reset());
  }

}
