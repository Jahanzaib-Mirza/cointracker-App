import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { expenses } from 'src/app/modals/expenses';
import { ExpenseService } from 'src/app/services/expense.service';


@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.page.html',
  styleUrls: ['./new-expense.page.scss'],
})
export class NewExpensePage implements OnInit {

  Form: FormGroup;
  expense: expenses;
  errMess: string;


  constructor
    (public alertCtrl: AlertController, private expenseService: ExpenseService,
      private fb: FormBuilder, private modalCtrl: ModalController
    ) {
      this.createForm();
  }

  ngOnInit() {
  }
  async upload() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Add receipt',
      // subHeader: 'Subtitle',
      // message: 'This is an alert message.',
      buttons: ['Pick A File', 'Take A Picture',]
    });

    await alert.present();
  }

  createForm() {
    this.Form = this.fb.group({
      description: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      date: ["", [Validators.required]],
      expenseType: ["", [Validators.required]],
      paymentMode: ["", [Validators.required]],
      period: ["", [Validators.required]],
    })
  };
  
  onDismiss() {
    this.modalCtrl.dismiss();
  }

  onSubmit(){
    this.expense = this.Form.value;
    this.expense.amount = this.expense.amount.toString();
    this.expense.userId = localStorage.userId;
    this.expense.companyId = localStorage.companyId;
    this.expense.receiptUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png';
    this.expense.category = 'food';
    this.expense.paymentReference = 'jjj'
    this.expenseService.addExpense(this.expense).subscribe((res)=>{
      console.log(res)
      this.modalCtrl.dismiss(res);
    },(errmess) => {
      this.errMess = <any>errmess;
    });
    console.log(this.expense);
  }
}
