import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionComponent } from './election.component';
import { of } from 'rxjs';

describe('ElectionComponent', () => {
  let component: ElectionComponent;
  let fixture: ComponentFixture<ElectionComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionComponent ],
      imports: [ReactiveFormsModule],
      "providers": [
        { "provide": FormBuilder, "useValue": formBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return fetchWinner details', () => {
    let details = [{"firstName":"Subbu","surName":"K","dob":"10/09/2000","region":"Kharadi","voteCount":2},{"firstName":"Anand","surName":"G","dob":"10/09/2001","region":"Magarpatta","voteCount":0}]
    
    expect(component.fetchWinner(details)).toEqual( [{"firstName":"Subbu","surName":"K","dob":"10/09/2000","region":"Kharadi","voteCount":2}]);
  });

  it('should return winnerDetails vote count increases', () => {
    // arrange
    component.elections = [{"firstName":"Subbu","surName":"K","dob":"10/09/2000","region":"Kharadi","voteCount":2},{"firstName":"Anand","surName":"G","dob":"10/09/2001","region":"Magarpatta","voteCount":3}]
    
    // act
    component.voteCandiate(1);

    // assert
    expect(component.winnerDetails).toEqual( [{"firstName":"Anand","surName":"G","dob":"10/09/2001","region":"Magarpatta","voteCount":4}]);
  });
  
  it('should update the values on submit', () => {
    // arrange
    component.elections = [{"firstName":"Subbu","surName":"K","dob":"10/09/2000","region":"Kharadi","voteCount":2},{"firstName":"Anand","surName":"G","dob":"10/09/2001","region":"Magarpatta","voteCount":3}];

    // act
    component.onSubmit();

    // assert
    expect(component.electionForm.valid).toBeFalsy();
    
    component.electionForm = formBuilder.group({
      "electionRegion": "",
      "firstName": "subbu",
      "surName": "k",
      "dob": "10/09/2000",
    });
    
    expect(component.electionForm.valid).toBeTruthy();
  });
});
