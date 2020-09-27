/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterationComponent } from './filteration.component';

describe('FilterationComponent', () => {
  let component: FilterationComponent;
  let fixture: ComponentFixture<FilterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetchOutput', () => {
    // act
    component.fetchOutput();

    // asert
    expect(component.resultDetails).toBe([{}]);
  });
  it('should finalResult', () => {
    expect(component.finalResult([{}],[{}])).toBe([{}]);
  });
});
