import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { company } from 'src/app/modals/company';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import { users } from '../../modals/users';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.page.html',
  styleUrls: ['./add-company.page.scss'],
})
export class AddCompanyPage implements OnInit {

  id:string;

  constructor(public http: HttpClient,private activatedRoute: ActivatedRoute, 
    private fb: FormBuilder,private router: Router, private companyService: CompanyService,
    private navParams: NavParams, private modalCtrl: ModalController) {
    this.createForm();
  }
  ngOnInit() {
    this.id = this.navParams.get('id');

  } 
  company: company;
  Form: FormGroup;

  errMess: string
  FormErrors = {
    Name: "",
    Description: "",
    Rank: 1,
  };
  validationMessages = {};

  createForm() {
    this.Form = this.fb.group({
      name: ["", [Validators.required]],
      address: ["", [Validators.required]],
      contactNumber: ["", [Validators.required]],
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
  };

  onSubmit() {
    this.company = this.Form.value;
    this.company.adminId = this.id; 
    this.company.contactNumber = this.company.contactNumber.toString();
    console.log(this.company)
    this.companyService.addCompany(this.company).subscribe((res)=>{
      console.log(res);
      this.modalCtrl.dismiss(res);
    },
    (errmess) => {
      this.errMess = <any>errmess;
    });
    // if (this.data.role === 'clerk') {
    //   console.log('clerk:', this.company);
    //   this.userService.addClerk(this.company).subscribe((res) => {
    //     // console.log(res);
    //     console.log('yessss');
    //   },
    //     (errmess) => {
    //       this.errMess = <any>errmess;
    //     });
    // }
  }
}

