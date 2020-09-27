import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filteration',
  templateUrl: './filteration.component.html',
  styleUrls: ['./filteration.component.css']
})
export class FilterationComponent {
  filtrations: any[] = [];
  filtrations2: any[] = [];
  resultDetails: any[] = [];
  filter = { filterName: "" };
  
  constructor(public fb: FormBuilder) {  }

  filterationForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required]],
    country: ['', [Validators.required]],
    firstName2: ['', [Validators.required]],
    lastName2: ['', [Validators.required]],
    age2: ['', [Validators.required]],
    country2: ['', [Validators.required]],
    filterName: ['', []],
  })


  onSubmitFirst() {
      // console.log(JSON.stringify(this.filterationForm.value));
      this.filtrations.push({
        firstName: this.filterationForm.get('firstName').value,
        lastName: this.filterationForm.get('lastName').value,
        age: this.filterationForm.get('age').value,
        country: this.filterationForm.get('country').value,
      });
  }
  onSubmitSecond() {
      // console.log(JSON.stringify(this.filterationForm.value));
      this.filtrations2.push({
        firstName: this.filterationForm.get('firstName2').value,
        lastName: this.filterationForm.get('lastName2').value,
        age: this.filterationForm.get('age2').value,
        country: this.filterationForm.get('country2').value,
      });
  }

  fetchOutput(){
    this.resultDetails = [];
    this.resultDetails = (this.finalResult(this.filtrations,this.filtrations2));
  }

  finalResult(result1, result2):  any[] {
    var props = ['age', 'firstName','lastName'];

    var output = result1.filter(function(o1){
        return result2.some(function(o2){
            return o1.firstName === o2.firstName;
        });
    }).map(function(o){
        return props.reduce(function(newo, firstName){
            newo[firstName] = o[firstName];
            return newo;
        }, {});
    });

    return output;
  }
}
