import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import { users } from '../../modals/users';
import { AddCompanyPage } from '../add-company/add-company.page';
import { UpdateCompanyPage } from '../update-company/update-company.page';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  errMess: string;
  user: users[];
  companies: any;
  id: string;
  userId: string = localStorage.userId;
  constructor(private activatedRoute: ActivatedRoute, private alertCtrl: AlertController,
     private userService: UserService, private companyService: CompanyService,
     private modalCtrl: ModalController) {
  }


  async openAddCompany() {
    const open = await this.modalCtrl.create({
      component: AddCompanyPage,
      componentProps:{
        id: this.id,
      }
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getUser(this.id);
        // this.getCompanies();
        this.getCompaniesOfAdmin();      }
    }))
    return await open.present()
  };

  async openUpdateCompany(id) {
    const open = await this.modalCtrl.create({
      component: UpdateCompanyPage,
      componentProps:{
        id: id,
      }
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getUser(this.id);
        // this.getCompanies();
        this.getCompaniesOfAdmin();      }
    }))
    return await open.present()
  };




  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUser(this.id);
    // this.getCompanies();
    this.getCompaniesOfAdmin();


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
          this.deleteCompany(id);
        },
      }]
    });

    await alert.present();

  };

  getUser(id) {
    this.userService.getUser(id).subscribe((res) => {
      console.log(res);
      this.user = res;
    }, (errmess) => {
      this.errMess = <any>errmess;
    });
  }
  // getCompanies() {
  //   this.companyService.getCompanies().subscribe((res) => {
  //     console.log(res);
  //     // this.companies = res; 

  //   }, (errmess) => {
  //     this.errMess = <any>errmess;
  //   })
  // };

  getCompaniesOfAdmin() {
    this.companyService.getCompaniesOfAdmin(this.id).subscribe((result) => {
      // console.log(this.id)
      console.log(result);
      this.companies = result;

    }, (errmess) => {
      this.errMess = <any>errmess;
    })
  };


  deleteCompany(id) {
    this.companyService.deleteCompany(id)
      .subscribe(() => {
        console.log("deleted");
        this.getCompaniesOfAdmin();
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });

  };

}
