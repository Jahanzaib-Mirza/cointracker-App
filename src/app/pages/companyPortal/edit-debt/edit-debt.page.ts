import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { updateDebt } from 'src/app/modals/updateDebt';
import { DebtService } from 'src/app/services/debt.service';

@Component({
  selector: 'app-edit-debt',
  templateUrl: './edit-debt.page.html',
  styleUrls: ['./edit-debt.page.scss'],
})
export class EditDebtPage implements OnInit {

  debt: any;
  Form: FormGroup;
  errMess: string;
  updatedDebt: updateDebt;
  constructor(private modalCtrl: ModalController, private debtService: DebtService,
    private navParams: NavParams, private fb: FormBuilder) {
    let id = this.navParams.get('id');
    this.getDebt(id);
  }

  ngOnInit() {
  }

  getDebt(id) {
    this.debtService.getDebt(id).subscribe((res) => {
      this.debt = res;
      this.Form = this.fb.group({
        borrowedFrom: [this.debt.borrowedFrom, [Validators.required]],
        amount: [this.debt.amount, [Validators.required]],
        description: [this.debt.description, [Validators.required]],
        date: [this.debt.date, [Validators.required]],
        dueDate: [this.debt.dueDate, [Validators.required]],

      })
    }, (errmess) => {
      this.errMess = <any>errmess;
    })
  };

  onDismiss() {
    this.modalCtrl.dismiss();
  };

  onSubmit() {
    this.updatedDebt = this.Form.value;
    this.updatedDebt.companyId = this.debt.companyId;
    this.updatedDebt.userId = this.debt.userId;
    this.updatedDebt.id = this.debt.id;
    this.updatedDebt.amountPaid = '0';
    console.log(this.updatedDebt);
    this.debtService.updateDebt(this.updatedDebt).subscribe((res)=>{
      console.log(res);
      this.modalCtrl.dismiss(res);
    },(errmess)=>{
      this.errMess = <any>errmess;
    })
  }

}
