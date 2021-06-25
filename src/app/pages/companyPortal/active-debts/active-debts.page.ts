import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DebtService } from 'src/app/services/debt.service';
import { BorrowedPage } from '../borrowed/borrowed.page';
import { EditDebtPage } from '../edit-debt/edit-debt.page';

@Component({
  selector: 'app-active-debts',
  templateUrl: './active-debts.page.html',
  styleUrls: ['./active-debts.page.scss'],
})
export class ActiveDebtsPage implements OnInit {

  debts:any;
  constructor(private debtService: DebtService, private modalCtrl: ModalController,
    private alertCtrl: AlertController) {
    this.getDebts();
  }

  ngOnInit() {
  };

  async openAddDebt() {
    const open = await this.modalCtrl.create({
      component: BorrowedPage,
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getDebts();
      }
    }))
    return await open.present()
  };

  async openEditDebt(id) {
    const open = await this.modalCtrl.create({
      component: EditDebtPage,
      componentProps:{
        id:id
      }
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getDebts();
      }
    }))
    return await open.present()
  }

  getDebts() {
    this.debtService.getDebts().subscribe((res) => {
      this.debts = res;
      console.log(res);
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
          this.deleteDebt(id);
        },
      }]
    });

    await alert.present();

  };

  deleteDebt(id){
    this.debtService.deleteDebt(id).subscribe((res)=>{
      console.log(res);
      this.getDebts();
    })
  }



}
