import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal 
{

firstname : string = "aditya";

lastName  = signal<string>("rampure")
age = signal(56)

sum = computed(()=> this.lastName()  + "-" + this.age())

constructor(){
  this.firstname = "ninad"

  console.log(this.firstname)

  setTimeout(()=>{
    this.lastName.set("kamat")
    this.firstname = "kk"
  },5000)
}


}
