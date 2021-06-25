import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { users } from '../../modals/users';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {

  constructor(public http: HttpClient, private alertCtrl: AlertController,
    private fb: FormBuilder, private userService: UserService, private router: Router,
    private modalCtrl: ModalController) {
    this.createForm();
  }

  ngOnInit() {
  }
  data: any;
  user: users = {
    email: '',
    fullName: '',
    userName: '',
    // role: '',
    address: '',
    phoneNumber: '',
    password: '',
    companyId: '',
  };
  Form: FormGroup;
  users: any;

  errMess: string
  FormErrors = {
    Name: "",
    Description: "",
    Rank: 1,
  };
  validationMessages = {};

  createForm() {
    this.Form = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(8)]],
      fullName: ["", [Validators.required]],
      // userName: ["", [Validators.required]],
      role: ["", [Validators.required]],
      address: ["", [Validators.required]],
      phoneNumber: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],

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


  onDismiss(){
    this.modalCtrl.dismiss();
  }



  onSubmit() {
    this.data = this.Form.value;
    this.user.userName = this.data.email;
    this.user.fullName = this.data.fullName;
    this.user.email = this.data.email;
    this.user.address = this.data.address;
    this.user.companyId = localStorage.companyId;
    this.user.phoneNumber = this.data.phoneNumber.toString();
    this.user.password = this.data.password;
    console.log(this.user.companyId);
    if (this.data.role === 'clerk') {
      console.log('clerk:', this.user);
      this.userService.addClerk(this.user).subscribe((res) => {
        console.log(res);
        this.modalCtrl.dismiss(res);
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });
    }
    else if (this.data.role === 'manager') {
      console.log('manager:', this.user);
      this.userService.addManager(this.user).subscribe((res) => {
        console.log(res);
        this.modalCtrl.dismiss(res);
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });
    }
    else if (this.data.role === 'accountant') {
      console.log('accountant:', this.user);
      this.userService.addAccountant(this.user).subscribe((res) => {
        console.log(res);
        this.modalCtrl.dismiss(res);
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });
    }

    // this.service.login(this.user)
  }
}
