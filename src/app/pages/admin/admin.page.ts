import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  companies:any;
  errMess: string;

  constructor(private companyService: CompanyService,private alertCtrl: AlertController,
    private router: Router,) {
    this.getCompanies();
   }

  ngOnInit() {
  };

  visitCompany(companyId){
    localStorage.setItem("companyId", companyId);
    this.router.navigateByUrl('/company-portal',{replaceUrl: true})

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
          this.deleteCompany(id);
        },
      }]
    });

    await alert.present();

  };

  deleteCompany(id) {
    this.companyService.deleteCompany(id)
      .subscribe(() => {
        console.log("deleted");
        this.getCompanies();
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });

  };

  getCompanies(){
    this.companyService.getCompaniesOfAdmin(localStorage.getItem('adminId')).subscribe((res)=>{
      console.log(res);
      this.companies = res;
    })
  }

}
