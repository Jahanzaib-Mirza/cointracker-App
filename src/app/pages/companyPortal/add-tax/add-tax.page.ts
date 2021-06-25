import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { tax } from 'src/app/modals/tax';
import { TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-add-tax',
  templateUrl: './add-tax.page.html',
  styleUrls: ['./add-tax.page.scss'],
})
export class AddTaxPage implements OnInit {
  Form: FormGroup;
  tax: tax;
  errMess: string;

  constructor(private fb: FormBuilder, private taxService: TaxService,
    private modalCtrl: ModalController) {
    this.createForm();
  }


  ngOnInit() {
  }

  createForm() {
    this.Form = this.fb.group({
      description: ["", [Validators.required]],
      charges: ["", [Validators.required]],
    })
  };

  onSubmit() {
    this.tax = this.Form.value;
    console.log(this.tax);
    this.taxService.addTax(this.tax).subscribe((res)=>{
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
