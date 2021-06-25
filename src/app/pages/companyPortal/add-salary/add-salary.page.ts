import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { SalaryService } from 'src/app/services/salary.service';
import { salary } from 'src/app/modals/salary';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.page.html',
  styleUrls: ['./add-salary.page.scss'],
})
export class AddSalaryPage implements OnInit {

  constructor(private modalCtrl: ModalController, public http: HttpClient, private fb: FormBuilder, private salaryService: SalaryService, private router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }
  salaryData: salary;
  Form: FormGroup;
  errMess: string;
  FormErrors = {
    Name: "",
    Description: "",
    Rank: 1,
  };
  validationMessages = {};
  onDismiss() {
    this.modalCtrl.dismiss();
  }
  createForm() {
    this.Form = this.fb.group({
      employeeName: ["", [Validators.required]],
      jobDescription: ["", [Validators.required]],
      // userName: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      date: ["", [Validators.required]],

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
    this.salaryData = this.Form.value;
    this.salaryData.userId = localStorage.userId;
    this.salaryData.companyId = localStorage.companyId;
    console.log(this.salaryData);
    this.salaryService.addSalary(this.salaryData).subscribe((res) => {
      console.log(res);
      this.modalCtrl.dismiss(res)
    },
      (errmess) => {
        this.errMess = <any>errmess;
      });
    // console.log(this.salaryData);

  }

}
