import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { updateBudget } from 'src/app/modals/updateBudget';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.page.html',
  styleUrls: ['./edit-budget.page.scss'],
})
export class EditBudgetPage implements OnInit {

  budget: any;
  Form: FormGroup;
  updatedBudget: updateBudget;
  errMess: string;
  constructor(private navParams: NavParams, private modalCtrl: ModalController,
    private budgetService: BudgetService, private fb: FormBuilder) {
    let id = this.navParams.get("id");
    this.getBudget(id);
  }

  ngOnInit() {
  }

  getBudget(id) {
    this.budgetService.getBudget(id).subscribe((res) => {
      this.budget = res;
      this.Form = this.fb.group({
        description: [this.budget.description, [Validators.required]],
        period: [this.budget.period, [Validators.required]],
        amount: [this.budget.amount, [Validators.required]],
      })
    })
  };

  onDismiss(){
    this.modalCtrl.dismiss();
  };

  onSubmit(){
    this.updatedBudget = this.Form.value;
    this.updatedBudget.id = this.budget.id;
    this.updatedBudget.category = this.budget.category;
    this.updatedBudget.companyId = this.budget.companyId;
    this.updatedBudget.userId = this.budget.userId;
    this.updatedBudget.budgetType = this.budget.budgetType;
    this.budgetService.updateBudget(this.updatedBudget).subscribe((res)=>{
      this.modalCtrl.dismiss(res);
    })
  }

}
