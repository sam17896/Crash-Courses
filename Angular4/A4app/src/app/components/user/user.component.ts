import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;

  address: Address;
  hobbies : string[];

  constructor() { }

  ngOnInit()  {
    this.name="John Doe";
    this.age=30;
    this.email = 'ahsan.kai@gmail.com';

    this.address = {
      street:'50 Main st',
      city:'Boston',
      state:'MA'
    }

    this.hobbies = [
      "Write Code",
      "Watch Movies",
      "Listen to Music"
    ]
  }

  onClick(){
    this.name = "Ahsan Sohail";
    this.hobbies.push("Wasting Time")
  }

  addHobby(hobby){
    this.hobbies.push(hobby)
    return false
  }

  deleteHobby(hobby){
    this.hobbies.splice(hobby,1);
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}
