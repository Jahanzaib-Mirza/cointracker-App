import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { ExpenseService } from 'src/app/services/expense.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { updateExpense } from 'src/app/modals/updateExpense';


@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.page.html',
  styleUrls: ['./edit-expense.page.scss'],
})
export class EditExpensePage implements OnInit {

  Form: FormGroup;
  expense: any;
  errMess: string;
  updatedExpense: updateExpense
  constructor(private navParams: NavParams, private expenseService: ExpenseService,
    private modalCtrl: ModalController, private fb: FormBuilder,
    private alertCtrl: AlertController) {
    let id = this.navParams.get('id');
    this.getExpense(id);
  }

  ngOnInit() {
  }

  getExpense(id) {
    this.expenseService.getExpense(id).subscribe((res) => {
      this.expense = res
      console.log(res);
      this.Form = this.fb.group({
        description: [this.expense.description, [Validators.required]],
        amount: [this.expense.amount, [Validators.required]],
        date: [this.expense.date, [Validators.required]],
        expenseType: [this.expense.expenseType, [Validators.required]],
        paymentMode: [this.expense.paymentMode, [Validators.required]],
        period: [this.expense.period, [Validators.required]],
      })
    })
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
          this.deleteExpense(id);
        },
      }]
    });

    await alert.present();

  };

  deleteExpense(id){
    this.expenseService.deleteExpenses(id).subscribe((res)=>{
      console.log(res);
      this.modalCtrl.dismiss('res');
    })
  }


  onDismiss() {
    this.modalCtrl.dismiss()
  };

  onSubmit() {
    this.updatedExpense = this.Form.value;
    this.updatedExpense.id = this.expense.id;
    this.updatedExpense.receiptUrl = this.expense.receiptUrl;
    this.updatedExpense.category = this.expense.category;
    this.updatedExpense.companyId = this.expense.companyId;
    this.updatedExpense.paymentReference = this.expense.paymentReference;
    this.updatedExpense.userId = this.expense.userId;
    // console.log(this.updatedExpense);
    this.expenseService.updateExpense(this.updatedExpense).subscribe((res) => {
      console.log(res);
      this.modalCtrl.dismiss(res);
    }, (errmess) => {
      this.errMess = <any>errmess;
    })
  }

}
