import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow 
{

  btn : boolean = true;


  show(){
    this.btn = true
  }
  hide(){
    this.btn = false
  }

}
