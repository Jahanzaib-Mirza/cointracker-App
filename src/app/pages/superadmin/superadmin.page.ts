import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { users } from '../../modals/users';
import { AddAdminPage } from '../add-admin/add-admin.page';
import { UpdateUserPage } from '../update-user/update-user.page';


@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.page.html',
  styleUrls: ['./superadmin.page.scss'],
})
export class SuperadminPage {

  errMess: string;
  users: any;
  id: any;
  constructor(public http: HttpClient, private router: Router,
    private alertCtrl: AlertController, private userService: UserService,
    private modalCtrl: ModalController,) {
    // if (this.router.getCurrentNavigation().extras.state.users) {
    //   this.users = this.router.getCurrentNavigation().extras.state.users;
    //   console.log("data refreshed")
    // }
    // else if (this.router.getCurrentNavigation().extras.state.user) {
    //   this.users = this.router.getCurrentNavigation().extras.state.user;
    //   console.log("data refreshed")
    // }
    
    this.getAdmins();

  }

  ngOnInit() {

    // this.getAllUsers();
  }

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

  async openAddAdmin() {
    const open = await this.modalCtrl.create({
      component: AddAdminPage,
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getAdmins();
      }
    }))
    return await open.present()
  }

  async openUpdateUser(id) {
    const open = await this.modalCtrl.create({
      component: UpdateUserPage,
      componentProps:{
        id:id
      }
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getAdmins();
      }
    }))
    return await open.present()
  }

  getAdmins() {
    this.userService.getAdmins().subscribe((res) => {
      this.users = res;
      console.log(res);
    },
      (errmess) => {
        this.errMess = <any>errmess;
      });
  };

  deleteUser(id) {
    this.userService.deleteUser(id)
      .subscribe(() => {
        console.log("deleted");
        this.getAdmins();
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });

  };

  // updateUser(id){
  //   this.userService.getUser(id).subscribe((result) => {
  //     this.users = result;
  //     this.id = this.users.id;
  //     this.sendData();
  //     // this.createForm();
  //   },
  //     (errmess) => {
  //       this.errMess = <any>errmess;
  //     });
  // };
  // sendData() {
  //   let navigationExtras: NavigationExtras = {
  //     state: {
  //       users: this.users
  //     }
  //   }
  //   this.router.navigate(['update-user'], navigationExtras)
  // }

}
