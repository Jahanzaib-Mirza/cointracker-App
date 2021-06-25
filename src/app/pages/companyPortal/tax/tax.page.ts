import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TaxService } from 'src/app/services/tax.service';
import { AddTaxPage } from '../add-tax/add-tax.page';
import { EditTaxPage } from '../edit-tax/edit-tax.page';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.page.html',
  styleUrls: ['./tax.page.scss'],
})
export class TaxPage implements OnInit {

  taxes:any;
  constructor(private taxService: TaxService,private modalCtrl: ModalController,
   private alertCtrl: AlertController ) { 
    this.getTax();
  }

  ngOnInit() {
  };

  getTax(){
    this.taxService.getTaxes().subscribe((res)=>{
      this.taxes = res;
      console.log(res)
    })
  };

  async openAddTax(){
    const open = await this.modalCtrl.create({
      component : AddTaxPage
    })
    open.onDidDismiss().then((data =>{
      if(data.data != null){
        this.getTax();
      }
    }))
    return await open.present();
  };

  async openEditTax(id){
    const open = await this.modalCtrl.create({
      component : EditTaxPage,
      componentProps:{
        id: id
      }
    })
    open.onDidDismiss().then((data =>{
      if(data.data != null){
        this.getTax();
      }
    }))
    return await open.present();
  }

  deleteTax(id){
    this.taxService.deleteTax(id).subscribe((res)=>{
      this.getTax();
    })
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
          this.deleteTax(id);
        },
      }]
    })
    await alert.present();
  };

}
