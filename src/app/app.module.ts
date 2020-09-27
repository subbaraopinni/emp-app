import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ElectionComponent } from './election/election.component';
import { EquationComponent } from './equation/equation.component';

@NgModule({
  declarations: [			
    AppComponent,
    ElectionComponent,
    EquationComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
