import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { login } from '../../modals/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  login: login;
  Form: FormGroup;
  errMess: string;
  FormErrors = {
    Email: "",
    Password: "",
  };

  validationMessages = {
    Email: {
      required: "Email is required.",
      email: "Email not in valid format.",
    },
    Password: {
      required: "Password is required.",
    },
  };

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private menuCtrl: MenuController,
    private router: Router
  ) { 
    this.createForm();
  }

  createForm() {
    this.Form = this.fb.group({
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", [Validators.required,Validators.minLength(8)]],
    });
    this.Form.valueChanges.subscribe((data) => this.onValueChanged(data));

    this.onValueChanged();
    
  };

  onValueChanged(data?: any) {
    if (!this.Form) {
      return;
    }
    const form = this.Form;
    for (const field in this.FormErrors) {
      if (this.FormErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.FormErrors[field] = "";
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.FormErrors[field] += messages[key] + " ";
            }
          }
        }
      }
    }
  };

  onSubmit() {
    this.login = this.Form.value;
    this.loginService.login(this.login);
  };
  
}
