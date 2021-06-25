import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { earnings } from 'src/app/modals/earnings';
import { EarningService } from 'src/app/services/earning.service';

@Component({
  selector: 'app-add-earning',
  templateUrl: './add-earning.page.html',
  styleUrls: ['./add-earning.page.scss'],
})
export class AddEarningPage implements OnInit {
  Form: FormGroup;
  earning: earnings;
  errMess: string;
  constructor(private fb: FormBuilder, private earningService: EarningService,
    private modalCtrl: ModalController) {
    this.createForm();
  }
  ngOnInit() {
  }

  createForm() {
    this.Form = this.fb.group({
      date: ["", [Validators.required]],
      amount: ["", [Validators.required]],
    })
  };

  onSubmit() {
    this.earning = this.Form.value;
    this.earning.companyId = localStorage.companyId;
    this.earning.invoiceUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png";
    this.earning.invoiceId = "08d92cbe-7893-457f-82b4-a0df7dfc9870";
    console.log(this.earning);
    this.earningService.addEarning(this.earning).subscribe((res)=>{
      console.log(res);
      this.modalCtrl.dismiss(res);
    },(errmess) => {
      this.errMess = <any>errmess;
    })
  };


  onDismiss(){
    this.modalCtrl.dismiss();
  };


}
