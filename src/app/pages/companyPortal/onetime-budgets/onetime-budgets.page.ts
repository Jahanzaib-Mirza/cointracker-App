import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewBudgetPage } from '../new-budget/new-budget.page';

@Component({
  selector: 'app-onetime-budgets',
  templateUrl: './onetime-budgets.page.html',
  styleUrls: ['./onetime-budgets.page.scss'],
})
export class OnetimeBudgetsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  };

  async openAddBudget() {
    const open = await this.modalCtrl.create({
      component: NewBudgetPage,
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        // this.getBudgets();
      }
    }))
    return await open.present()
  }

}
