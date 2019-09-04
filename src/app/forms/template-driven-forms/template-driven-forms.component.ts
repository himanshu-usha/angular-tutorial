import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  defaultGender = 'male';
  servers = ['Production Server', 'QA Server', 'Development Server'];
  suggestUserName = 'Normal User';
  user = {
    username : '',
    mobile : 0,
    email : '',
    gender : '',
    authenticatedserver : ''
  };
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.mobile = this.signupForm.value.userData.mobile;
    this.user.email = this.signupForm.value.userData.email;
    this.user.gender = this.signupForm.value.userData.gender;
    this.user.authenticatedserver = this.signupForm.value.userData.server;

    this.signupForm.reset();
  }

  onSuggestUserName() {
    this.signupForm.form.patchValue({
      userData : { username : this.suggestUserName }
    });
  }

}
