import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { earnings } from 'src/app/modals/earnings';
import { EarningService } from 'src/app/services/earning.service';

@Component({
  selector: 'app-edit-earning',
  templateUrl: './edit-earning.page.html',
  styleUrls: ['./edit-earning.page.scss'],
})
export class EditEarningPage implements OnInit {

  updatedEarning: earnings;
  Form: FormGroup;
  earning:any;
  constructor(private modalCtrl: ModalController,private earningService: EarningService,
    private fb: FormBuilder,private navParams:NavParams) { 
      let id = this.navParams.get("id");
      this.getEarning(id);
    }

  ngOnInit() {
  }

  getEarning(id){
    this.earningService.getEarning(id).subscribe((res)=>{
      console.log(res)
      this.earning = res;
      this.Form = this.fb.group({
        date: [this.earning.date.slice(0,10),[Validators.required]],
        amount: [this.earning.amount, [Validators.required]],
      })
    })
  };

  onSubmit(){
    this.updatedEarning = this.Form.value;
    this.updatedEarning.id = this.earning.id;
    this.updatedEarning.invoiceId = this.earning.invoiceId;
    this.updatedEarning.invoiceUrl = this.earning.invoiceUrl;
    this.updatedEarning.companyId = this.earning.companyId;
    this.earningService.updateEarning(this.updatedEarning).subscribe((res)=>{
      this.modalCtrl.dismiss(res);
    })

  }

}
