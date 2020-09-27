import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import * as _ from 'lodash'; 

import { Election } from './election';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent{
  elections: Election[] = [];
  electionRegion: String[] = ["Kharadi", "Magarpatta"];
  winnerDetails: Election[] = [];

  constructor(public fb: FormBuilder) {
  }

  electionForm = this.fb.group({
    electionRegion: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    surName: ['', [Validators.required]],
    dob: ['', [Validators.required]],
  })


  onSubmit() {
    if (!this.electionForm.valid) {
      return false;
    } else {
      // console.log(JSON.stringify(this.electionForm.value));
      this.elections.push({
        firstName: this.electionForm.get('firstName').value,
        surName: this.electionForm.get('surName').value,
        dob: this.electionForm.get('dob').value,
        region: this.electionForm.get('electionRegion').value,
        voteCount: 0
      });
    }
  }

  voteCandiate(currentVoter: number) {
    this.elections[currentVoter] = {
      ...this.elections[currentVoter],
      voteCount: this.elections[currentVoter].voteCount + 1
    }
    //this.electionForm.reset();
    
    this.winnerDetails = this.fetchWinner(this.elections);
  }

  fetchWinner(candiateDetails: Election[]): Election[] {
    if (candiateDetails.length) {

      /* candiateDetails.sort((x, y) => {
        return x.firstName - y.firstName;
      }); */

      const maximumVotes = _.maxBy(candiateDetails, (entry) => {
        return entry["voteCount"];
      });

      // console.log(maximumVotes);
      return [maximumVotes];
    }
  }
}
