import { Component } from '@angular/core';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})
export class EquationComponent{
  public firstResult: any;
  public lastResult: any;
  public finalResult: any;

  constructor() { }

  addResult(a1Value: string, a2Value: string, b1Value: string, c1Value: string, c2Value: string): void {
    this.firstResult = this.calcuateAddorMultiply(+a1Value, +a2Value);
    this.lastResult = this.calcuateAddorMultiply(+c1Value, +c2Value);

    this.finalResult = this.calculateFinalResult(this.firstResult,+b1Value,this.lastResult);
  }

  calcuateAddorMultiply(a: number, b: number): number {
    let c = a + b;
    let d = a * b;

    if (c > d) {
      return c;
    } else {
      return d;
    }
  }

  calculateFinalResult(first: number, middle: number, last: number): number {
    let c = first + middle + last;
    let d = first * middle * last;

    if (c > d) {
      return c;
    } else {
      return d;
    }
  }
}
