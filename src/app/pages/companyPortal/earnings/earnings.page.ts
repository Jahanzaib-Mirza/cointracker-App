import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EarningService } from 'src/app/services/earning.service';
import { AddEarningPage } from '../add-earning/add-earning.page';
import { EditEarningPage } from '../edit-earning/edit-earning.page';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.page.html',
  styleUrls: ['./earnings.page.scss'],
})
export class EarningsPage implements OnInit {

  earnings:any
  errMess:string;
  constructor(private earningService: EarningService,private alertCtrl:AlertController,
    private modalCtrl: ModalController) { 
    this.getEarnings();
  }

  ngOnInit() {
  };

  getEarnings(){
    this.earningService.getEarnings().subscribe((res)=>{
      console.log(res);
      this.earnings = res;
    },(errmess)=>{
      this.errMess = <any>errmess;
    })
  };

  async openAddEarning() {
    const open = await this.modalCtrl.create({
      component: AddEarningPage,

    })
    open.onDidDismiss().then((data => {
      if (data.data != null) {
        this.getEarnings();
      }
    }))
    return await open.present()
  };

  async openEditEarning(id) {
    const open = await this.modalCtrl.create({
      component: EditEarningPage,
      componentProps:{
        id: id
      }
    })
    open.onDidDismiss().then((data => {
      if (data.data != null) {
        this.getEarnings();
      }
    }))
    return await open.present()
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
          this.deleteEarning(id);
        },
      }]
    })
    await alert.present();
  };

  deleteEarning(id){
    this.earningService.deleteEarning(id).subscribe((res)=>{
      this.getEarnings();

    },(errmess)=>{
      this.errMess = <any>errmess
    })
  }


}
