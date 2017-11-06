import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { FirstComponentService } from './first-component.service';
//const {x} = xyz; This is object destructuring. X is a property in xyz object and its assigne to const {x}
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  providers: [FirstComponentService]
})

export class FirstComponentComponent implements OnInit {

  @Input() appTitle;
  @Output() isChildSaveSucceeded : EventEmitter<any> = new EventEmitter(); //Output parameter emits the data to listener

  constructor(private _service : FirstComponentService) { }

  ngOnInit() {
    this.saveStatus();
     this._service.getData().subscribe(response => {alert(response)} );
  }

  saveStatus(){
    this.isChildSaveSucceeded.emit("saveSucceeded");
  }

  callChildMethod(){
    alert("ChildMethodCalled");
    
  }
  
}
