import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { updateCompany } from 'src/app/modals/updateCompany';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.page.html',
  styleUrls: ['./update-company.page.scss'],
})
export class UpdateCompanyPage implements OnInit {

  Form: FormGroup;
  errMess: string;
  company: any;
  updatedCompany: updateCompany;


  constructor(public http: HttpClient, private router: Router, private navParams: NavParams,
    private fb: FormBuilder, private companyService: CompanyService,
    private modalCtrl: ModalController) {
    let id = this.navParams.get('id');
    this.getCompany(id);
    // this.Form = this.fb.group({
    //   // Id: [this.company.id],
    //   name: [this.company.name,[Validators.required]],
    //   address: [this.company.address,[Validators.required]],
    //   contactNumber: [this.company.contactNumber,[Validators.required]],
    //   email: [this.company.email,[Validators.required, Validators.email]],
    // })

    // if(this.router.getCurrentNavigation().extras.state){
    //   this.company = this.router.getCurrentNavigation().extras.state.users;
    //   console.log(this.company);

    // }



  }


  ngOnInit() {
  }
  getCompany(id) {
    this.companyService.getCompany(id).subscribe((res) => {
      this.company = res;
      console.log(this.company.name);
      this.Form = this.fb.group({
        // Id: [this.company.id],
        name: [this.company.name, [Validators.required]],
        address: [this.company.address, [Validators.required]],
        contactNumber: [this.company.contactNumber, [Validators.required]],
        email: [this.company.email, [Validators.required, Validators.email]],
      })
    }, (errmess) => {
      this.errMess = <any>errmess;
    });
  };

  onDismiss() {
    this.modalCtrl.dismiss();
  }

  onSubmit() {
    this.updatedCompany = this.Form.value;
    this.updatedCompany.id = this.company.id;
    this.company.name = this.updatedCompany.name;
    this.company.address = this.updatedCompany.address;
    this.company.contactNumber = this.updatedCompany.contactNumber.toString();
    this.company.email = this.updatedCompany.email;
    console.log(this.company)
    this.companyService.updateCompany(this.company)
      .subscribe((res) => {
        console.log(res)
        this.modalCtrl.dismiss(res);
      },
        (errmess) => {
          this.errMess = <any>errmess;
        });


  }


}
