import { Component, Input, ViewChild } from '@angular/core';
import { FirstComponentComponent} from './first-component/first-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
@ViewChild(FirstComponentComponent) _firstComponent : FirstComponentComponent; 
 constructor (){}


 isChildSaveSuccess($event){
 
  this._firstComponent.callChildMethod();
  if($event === "saveSucceeded"){
    alert("Child Saved the data");
  }
 }
}
