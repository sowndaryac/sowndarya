import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.scss']
})
export class NewcourseComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });
  
  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }
  removeTopic(topic: FormControl)
  {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index); 
  }
  get topics()
  {
    return this.form.get('topics') as FormArray;
  }





}

