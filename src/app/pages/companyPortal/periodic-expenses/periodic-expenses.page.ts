import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExpenseService } from 'src/app/services/expense.service';
import { EditExpensePage } from '../edit-expense/edit-expense.page';
import { NewExpensePage } from '../new-expense/new-expense.page';

@Component({
  selector: 'app-periodic-expenses',
  templateUrl: './periodic-expenses.page.html',
  styleUrls: ['./periodic-expenses.page.scss'],
})
export class PeriodicExpensesPage implements OnInit {
  expenses:any;
  constructor(private expenseService: ExpenseService,private modalCtrl: ModalController) { 
    this.getExpenses();
  }

  ngOnInit() {
  }

  getExpenses(){
    this.expenseService.getExpenses().subscribe((res)=>{
      this.expenses = res;
      console.log(res);
    })
  };

  async openNewExpense() {
    const open = await this.modalCtrl.create({
      component: NewExpensePage,
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getExpenses();
      }
    }))
    return await open.present()
  };

  async openEditExpense(id) {
    const open = await this.modalCtrl.create({
      component: EditExpensePage,
      componentProps:{
        id:id
      }
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getExpenses();
      }
    }))
    return await open.present()
  }

}
