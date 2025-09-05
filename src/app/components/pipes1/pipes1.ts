import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes1',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe, SlicePipe],
  templateUrl: './pipes1.html',
  styleUrl: './pipes1.css'
})
export class Pipes1 
{

  name : string = "adItya rAmpure"
arr  = [1,2,3,4,5,6,7,8]
 
currentDate : Date = new Date()
}
