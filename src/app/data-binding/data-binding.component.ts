import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  userName = '';
  title = 'this is simple tittle for demonstrate example';
  num = 17;
  user ={
    userId: 201,
    usernam: 'Suman',
    status: 'Active'
  }
  colorval = 'red';
  clsName = 'c1';
  placeholder = 'Enter Value';
  hrefval = 'http://google.com';
  updatedlink = 'http://oracle.com';

  customers = [{value: 'Ebony'}, {value: 'Chiho'}];
  customer = 'Padma'

  showAlert(id){
    alert('Button clicked ' + id);
  }
  consoleLog(){
    console.log('From Input Tag');
    
  }
  firstname = '';
  readFirst(){
    console.log(this.firstname);
    
  }

  constructor() { }

  

  ngOnInit(): void {
  }

}
