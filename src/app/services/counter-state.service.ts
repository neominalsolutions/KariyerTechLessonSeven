import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterStateService {

  // BehaviorSubject rxjs yöntemi
  counterTracker = new BehaviorSubject(0);

  constructor() { }

  // state değişimini sağlayan aksiyonlar
  // başlangıç değerine döndür
  reset():void {
    this.counterTracker.next(0);
  }

  increase():void {
    this.counterTracker.next(this.counterTracker.value + 1);
  }

  decrase():void {
    this.counterTracker.next(this.counterTracker.value - 1);
  }

  // değişen state dinleyici bir observable nesne tanımlıyoruz
  // bu başka componentlerden de state değişimi yakalanabilsin diye observable tipinde tanımladı.
  getCounter() {
    return this.counterTracker.asObservable();
  }


}
