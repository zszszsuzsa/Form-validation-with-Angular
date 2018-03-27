import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild("f") signupForm: NgForm;

  user = {
    name: "",
    email: "",
    address: ""
  };

  formArray = "";

  onSubmit(form: NgForm) {
    console.log(form);
    this.user.name = this.signupForm.value.name;
    this.user.email = this.signupForm.value.email;
    this.user.address = this.signupForm.value.address;
    this.formArray = JSON.stringify(this.signupForm.value, undefined, 4);
    this.signupForm.reset();
  }
}




