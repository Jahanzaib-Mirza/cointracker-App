import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { users } from '../../modals/users';
import { ActivatedRoute, Router } from '@angular/router';
import { updateUser } from 'src/app/modals/updateUser';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  Form: FormGroup;
  errMess: string;
  user: any;
  updatedUser: updateUser;


  constructor(public http: HttpClient, private router: Router,
     private navParams: NavParams, private fb: FormBuilder, private userService: UserService,
     private modalCtrl: ModalController) {
    // if(this.router.getCurrentNavigation().extras.state){
    //   this.user = this.router.getCurrentNavigation().extras.state.users;
    //   console.log(this.user);

    // }



  }

  onDismiss(){
    this.modalCtrl.dismiss();
  }


  ngOnInit() {
    let id = this.navParams.get('id');
    this.getUser(id);
  }
  getUser(id) {
    this.userService.getUser(id).subscribe((res) => {
      this.user = res;
      console.log(res);
      this.Form = this.fb.group({
        // Id: [this.user.id],
        fullName: [this.user.fullName,[Validators.required]],
        address: [this.user.address,[Validators.required]],
        phoneNumber: [this.user.phoneNumber,[Validators.required]],
        email: [this.user.email,[Validators.required, Validators.email]],
      })
    }, (errmess) => {
      this.errMess = <any>errmess;
    });
  };

  onSubmit() {
    this.updatedUser = this.Form.value;
    this.updatedUser.id = this.user.id;
    this.user.fullName = this.updatedUser.fullName;
    this.user.address = this.updatedUser.address;
    this.user.phoneNumber = this.updatedUser.phoneNumber;
    this.user.email = this.updatedUser.email;
    this.user.userName = this.updatedUser.email;
    // this.updatedUser.UserName = this.updatedUser.Email;
    console.log(this.user)
    this.userService.updateUser(this.user)
      .subscribe((res) => {
        console.log(res)
        this.modalCtrl.dismiss(res);
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });


  }

}
