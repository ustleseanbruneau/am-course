import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Modules Course';

  letterSelected(letter: any) {
    console.log(`The user selected a letter ${letter}`)
  }
}

