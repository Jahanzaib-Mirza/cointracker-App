import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { SalaryService } from 'src/app/services/salary.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { deductSalary } from 'src/app/modals/deductSalary';

@Component({
  selector: 'app-deduct-salary',
  templateUrl: './deduct-salary.page.html',
  styleUrls: ['./deduct-salary.page.scss'],
})
export class DeductSalaryPage implements OnInit {
  id: string;
  Form: FormGroup;
  deductedSalary: deductSalary;

  constructor(private navParams: NavParams, private salaryService: SalaryService,
    private fb: FormBuilder, private modalCtrl: ModalController) {
    this.createForm();
    this.id = this.navParams.get('id');
  }

  ngOnInit() {
  };

  createForm() {
    this.Form = this.fb.group({
      description: ["", [Validators.required]],
      amount: ["", [Validators.required]],
    })
  };

  onSubmit(){
    this.deductedSalary = this.Form.value;
    this.deductedSalary.salaryId = this.id;
    this.deductedSalary.companyId = localStorage.companyId;
    this.deductedSalary.userId = localStorage.userId;
    console.log(this.deductedSalary);
    this.salaryService.deductSalary(this.deductedSalary).subscribe((res)=>{
      console.log(res);
    })
  };

  onDismiss(){
    this.modalCtrl.dismiss();
  };

}
