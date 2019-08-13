import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;
  isActive = false;
  constructor(){

  }
  oninit(){

  }
  onClick(){
    this.isActive = !this.isActive;
  }
}
