import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  log(x) { console.log(x); }
  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Arts' },
    { id: 3, name: 'Languages' },
  ];

  constructor() { }
  Create(course)
  {
    console.log(course);
  }
  
  ngOnInit()
  {
    
  }
}



