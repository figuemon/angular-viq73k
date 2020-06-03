import { Component } from '@angular/core';
import { test2 } from './classExample';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-wrapper" style="min-height: 400px;">
      <div class="col-xs-12 col-sm-6 example-col">
        <p>AutoComplete</p>
        <kendo-autocomplete [data]="listItems" [placeholder]="'Your favorite sport'">
        </kendo-autocomplete>
      </div>

      <div class="col-xs-12 col-sm-6 example-col">
        <p>ComboBox</p>
        <kendo-combobox [data]="listItems" [value]="'Basketball'">
        </kendo-combobox>
      </div>

      <div class="col-xs-12 col-sm-6 example-col">
        <p>DropDownList</p>
        <kendo-dropdownlist [data]="listItems" [value]="'Basketball'">
        </kendo-dropdownlist>
      </div>

      <div class="col-xs-12 col-sm-6 example-col">
        <p>MultiSelect</p>
        <kendo-multiselect [data]="listItems" [value]="value" [placeholder]="'Your favorite sports'"></kendo-multiselect>
      </div>
    </div>
  `
})
export class AppComponent {
    public listItems: Array<string> = [
        'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
        'Football', 'Table Tennis', 'Tennis', 'Volleyball'
    ];

    public value = ['Basketball', 'Cricket'];
constructor(){
    const testing = new test2();
    console.log(testing.imp());
  }
}

