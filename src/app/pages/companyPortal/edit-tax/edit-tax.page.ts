import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { updateTax } from 'src/app/modals/updateTax';
import { TaxService } from 'src/app/services/tax.service';

@Component({
  selector: 'app-edit-tax',
  templateUrl: './edit-tax.page.html',
  styleUrls: ['./edit-tax.page.scss'],
})
export class EditTaxPage implements OnInit {

  updatedTax: updateTax;
  tax: any;
  Form: FormGroup;
  errmess: string;
  constructor(private modalCtrl: ModalController, private taxService: TaxService,
    private navParams: NavParams, private fb: FormBuilder) {
    let id = this.navParams.get("id");
    this.getTax(id);
  }

  ngOnInit() {
  };

  getTax(id) {
    this.taxService.getTax(id).subscribe((res) => {
      this.tax = res;
      this.Form = this.fb.group({
        description: [this.tax.description, [Validators.required]],
        charges: [this.tax.charges, [Validators.required]],
      })
    })
  }

  onSubmit(){
    this.updatedTax = this.Form.value;
    this.updatedTax.id = this.tax.id;
    this.taxService.updateTax(this.updatedTax).subscribe((res)=>{
      this.modalCtrl.dismiss(res);
    })
  };

  onDismiss(){
    this.modalCtrl.dismiss();
  }

}
