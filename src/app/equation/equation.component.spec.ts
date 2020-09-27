/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationComponent } from './equation.component';

describe('EquationComponent', () => {
  let component: EquationComponent;
  let fixture: ComponentFixture<EquationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EquationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Add or multiply 1 or 5', () => {
    expect(component.calcuateAddorMultiply(1, 5)).toEqual(6);
  });

  it('should Add or multiply 10 or 8', () => {
    expect(component.calcuateAddorMultiply(10, 8)).toEqual(80);
  });

  it('should calculateFinalResult 6,6,80', () => {
    expect(component.calculateFinalResult(6, 6, 80)).toEqual(2880);
  });

  it('should calculateFinalResult 5,4,30', () => {
    expect(component.calculateFinalResult(5, 4, 30)).toEqual(600);
  });

  it('should calculateFinalResult 1,1,1', () => {
    expect(component.calculateFinalResult(1,1,1)).toEqual(3);
  });

  it('should addResult 1,5,6,10,8', () => {
    component.addResult("1", "5", "6", "10", "8");

    expect(component.firstResult).toEqual(6);
    expect(component.lastResult).toEqual(80);
    expect(component.finalResult).toEqual(2880);
  });
});
