import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { users } from 'src/app/modals/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.page.html',
  styleUrls: ['./add-admin.page.scss'],
})
export class AddAdminPage implements OnInit {

  constructor(public http: HttpClient, private alertCtrl: AlertController,
    private fb: FormBuilder, private userService: UserService,
    private router: Router, private modalCtrl: ModalController) {
    this.createForm();
  }
  ngOnInit() {
  };

  data: any;
  user: users;
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

  // async confirmation() {
  //   const alert = await this.alertCtrl.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Confirmation',
  //     message: 'User have been Created',
  //     buttons: [{
  //       text: 'OK',
  //       role: 'OK',
  //       handler: () => {
  //         this.sendData();
  //       },
  //     }]
  //   });

  //   await alert.present();

  // };

  
onDismiss(){
  this.modalCtrl.dismiss();
}


  onSubmit() {
    this.user = this.Form.value;
    this.user.userName = this.user.email;
    this.user.phoneNumber = this.user.phoneNumber.toString();

    console.log('admin:', this.user);
    this.userService.addAdmin(this.user).subscribe((res) => {
      this.modalCtrl.dismiss(res);
    },
      (errmess) => {
        this.errMess = <any>errmess;
      });


  }
}
