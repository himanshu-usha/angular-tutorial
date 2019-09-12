import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  stringInterpolation = 'String Interpolation';
  propertyBinding = 'Property Binding';
  eventBinding = 'Event Binding';
  twoway = 'Two-way Binding'
  selectedColor = 'yellow';
  name = 'Himanshu';
  person = { name: 'Alex', age: '27', profession: 'Scientist' };
  constructor() {}

  changeName(event) {
    console.log(event);
    this.name = event.target.value;
  }
  ngOnInit() {}
}
