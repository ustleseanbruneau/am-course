import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vowel-picker',
  //templateUrl: './vowel-picker.component.html',
  template:`
    <h1> Pick a vowel </h1>

    <div *ngFor="let l of letters;" class="vowelPickerCard" (click)="selected(l)">
      <p [ngStyle]="{'color':letterColor}" > {{l}} </p>
    </div>`
  ,
  //styleUrls: ['./vowel-picker.component.css']
  styles: [`
    .vowelPickerCard{
      width: 100px;
      height: 100px;
      background-color: slategray;
      color:  white;
      text-align: center;
      display: inline-block;
      margin-right:20px
    }

    .vowelPickerCard p {
      font-size: 2em;
    }
  `]
})
export class VowelPickerComponent implements OnInit {

  letters = VOWELS

  @Input()letterColor?:string
  @Output()letterSelected:EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    if(this.letterColor) {
      console.log('custom letter color detected: ' + this.letterColor)
    }
  }

  selected(letter: any) {
    console.log(`letter selected: ${letter}`)
    this.letterSelected.emit(letter)
  }

}

const VOWELS = ['A','E','I','O','U']

