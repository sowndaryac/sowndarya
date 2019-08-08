import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
  {{ course.title |uppercase}}<br/>
  {{ course.students | number }}<br/>
  {{ course.rating | number:'2.1-1' }}<br/>
  {{ course.price | currency:'$' }}<br/>
  {{ course.releaseDate }}<br/>
  `
})
export class PipesComponent implements OnInit {
course = {
  title:"the complete angular course",
  rating: 4.97,
  students: 30123,
  price: 190.95,
  releaseDate: new Date(2016,3,1)
}
  constructor() { }

  ngOnInit() {
  }

}
