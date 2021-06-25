import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { AdduserPage } from '../../adduser/adduser.page';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  errMess: string;
  clerks: any;
  managers: any;
  accountants: any;

  constructor(public http: HttpClient, private router: Router, private alertCtrl: AlertController,
     private userService: UserService, private modalCtrl: ModalController) {
    this.getClerks();
    this.getAccountants();
    this.getManagers();
  }

  ngOnInit() {
  };

  async confirmation(id) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Are you sure you want to delete',
      buttons: [{
        text: 'Cancel',
      }, {
        text: 'Delete',
        role: 'Delete',
        handler: () => {
          this.deleteUser(id);
        },
      }]
    });

    await alert.present();

  };

  deleteUser(id) {
    this.userService.deleteUser(id)
      .subscribe(() => {
        console.log("deleted");
        this.getClerks();
        this.getAccountants();
        this.getManagers();      },
        (errmess) => {
          this.errMess = <any>errmess;
        });

  };

  async openAddUser() {
    const open = await this.modalCtrl.create({
      component: AdduserPage,

    })
    open.onDidDismiss().then((data => {
      if (data.data != null) {
        this.getClerks();
        this.getAccountants();
        this.getManagers();
      }
    }))
    return await open.present()
  }

  getClerks() {
    this.userService.getClerks(localStorage.companyId).subscribe((res) => {
      this.clerks = res;
      console.log(this.clerks)
    },
      (errmess) => {
        this.errMess = <any>errmess;
      })
  };

  getManagers() {
    this.userService.getManagers(localStorage.companyId).subscribe((res) => {
      this.managers = res;
      console.log(res);
    },
      (errmess) => {
        this.errMess = <any>errmess;
      })
  };

  getAccountants() {
    this.userService.getAccountants(localStorage.companyId).subscribe((res) => {
      console.log(res);
      this.accountants = res;
    },
      (errmess) => {
        this.errMess = <any>errmess;
      })
  };





}
