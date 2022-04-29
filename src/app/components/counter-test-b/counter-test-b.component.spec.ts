import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTestBComponent } from './counter-test-b.component';

describe('CounterTestBComponent', () => {
  let component: CounterTestBComponent;
  let fixture: ComponentFixture<CounterTestBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTestBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterTestBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
