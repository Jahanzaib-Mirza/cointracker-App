import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, PopoverController } from '@ionic/angular';
import { SalaryService } from 'src/app/services/salary.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { updateSalary } from 'src/app/modals/updateSalary';


@Component({
  selector: 'app-edit-salary',
  templateUrl: './edit-salary.page.html',
  styleUrls: ['./edit-salary.page.scss'],
})
export class EditSalaryPage implements OnInit {
  Form: FormGroup;
  id: string;
  updatedSalary: updateSalary;
  errMess: string;
  salary: any;

  constructor(private navParams: NavParams, private salaryService: SalaryService,
    private fb: FormBuilder, private modalCtrl: ModalController,
    private popCtrl: PopoverController) {
    this.id = this.navParams.get('id');
    this.getSalary(this.id);
    
  }


  ngOnInit() {
  };

  //get salary by id
  getSalary(id) {
    this.salaryService.getSalary(id).subscribe((res) => {
      console.log(res);
      this.salary = res;
      this.Form = this.fb.group({
        // Id: [this.user.id],
        employeeName: [this.salary.employeeName,[Validators.required]],
        jobDescription: [this.salary.jobDescription,[Validators.required]],
        amount: [this.salary.amount,[Validators.required]],
        date: [this.salary.date,[Validators.required]],
      })
    })
  };

  onDismiss(){
    this.modalCtrl.dismiss();
  };

  //Salary Put service CAlled
  onSubmit() {
    this.updatedSalary = this.Form.value;
    this.updatedSalary.userId = localStorage.userId;
    this.updatedSalary.companyId = localStorage.companyId;
    this.updatedSalary.id = this.id
    console.log(this.updatedSalary);
    this.salaryService.updateSalary(this.updatedSalary).subscribe((res) => {
      console.log(res);
      this.popCtrl.dismiss("Updated");
      this.modalCtrl.dismiss(res);
    },
      (errmess) => {
        this.errMess = <any>errmess;
      });
    // console.log(this.salaryData);
  }


}
