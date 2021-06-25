import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { BudgetService } from 'src/app/services/budget.service';
import { EditBudgetPage } from '../edit-budget/edit-budget.page';
import { NewBudgetPage } from '../new-budget/new-budget.page';

@Component({
  selector: 'app-periodic-budgets',
  templateUrl: './periodic-budgets.page.html',
  styleUrls: ['./periodic-budgets.page.scss'],
})
export class PeriodicBudgetsPage implements OnInit {

  budgets: any;
  constructor(private budgetService: BudgetService, private modalCtrl: ModalController,
    private alertCtrl: AlertController) {
    this.getBudgets();
  }

  ngOnInit() {
  };

  getBudgets() {
    this.budgetService.getbudgets().subscribe((res) => {
      console.log(res);
      this.budgets = res;

    })
  };

  async openAddBudget() {
    const open = await this.modalCtrl.create({
      component: NewBudgetPage,

    })
    open.onDidDismiss().then((data => {
      if (data.data != null) {
        this.getBudgets();
      }
    }))
    return await open.present()
  };

  async openEditBudget(id) {
    const open = await this.modalCtrl.create({
      component: EditBudgetPage,
      componentProps:{
        id: id
      }
    })
    open.onDidDismiss().then((data => {
      if (data.data != null) {
        this.getBudgets();
      }
    }))
    return await open.present()
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
          this.deleteBudget(id);
        },
      }]
    })
    await alert.present();
  };

  deleteBudget(id){
    this.budgetService.deleteBudget(id).subscribe((res)=>{
      console.log(res);
      this.getBudgets();
    })
  }

}
