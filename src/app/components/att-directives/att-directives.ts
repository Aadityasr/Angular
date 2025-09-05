import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
// import { NgClass } from "../../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-att-directives',
  imports: [NgClass],
  templateUrl: './att-directives.html',
  styleUrl: './att-directives.css'
})
export class AttDirectives 
{

setDivName = signal<string>("")


divName(str : string){
  this.setDivName.set(str)
}
}
