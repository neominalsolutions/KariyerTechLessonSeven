import { Component, OnInit } from '@angular/core';
import { CounterStateService } from 'src/app/services/counter-state.service';

@Component({
  selector: 'app-counter-test-a',
  templateUrl: './counter-test-a.component.html',
  styleUrls: ['./counter-test-a.component.scss']
})
export class CounterTestAComponent implements OnInit {

  constructor(private counterStateService:CounterStateService) { }

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

}
