import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { paySalary } from 'src/app/modals/paySalary';
import { DeductSalaryPage } from 'src/app/pages/companyPortal/deduct-salary/deduct-salary.page';
import { EditSalaryPage } from 'src/app/pages/companyPortal/edit-salary/edit-salary.page';
import { SalaryService } from 'src/app/services/salary.service';

@Component({
  selector: 'app-salary-buttons',
  templateUrl: './salary-buttons.component.html',
  styleUrls: ['./salary-buttons.component.scss'],
})
export class SalaryButtonsComponent implements OnInit {
  id: string;
  salary: paySalary = {
    companyId: '',
    salaryId: '',

  };
  constructor(private salaryService: SalaryService, private navParams: NavParams,
    private modalCtrl: ModalController,private popCtrl: PopoverController,
    private alertCtrl: AlertController) {
    this.id = this.navParams.get('id')
  }

  ngOnInit() { }

  dismiss() {
    console.log("zebi")
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
          this.deleteSalary(id);
        },
      }]
    });

    await alert.present();

  };

  deleteSalary(id) {
    console.log(id)
    this.salaryService.deleteSalary(id).subscribe((res) => {
      console.log(res);
      this.popCtrl.dismiss("deleted");
    })
  };

  async openEditSalary(id) {
    console.log("hi")
    const open = await this.modalCtrl.create({
      component: EditSalaryPage,
      componentProps: {
        id: id
      },

    })
    // open.onDidDismiss().then((data => {
    //   if(data.data != null){
    //     this.getSalaries();
    //   }
    // }))
    return await open.present()
  };

  async openDeductSalary(id) {
    console.log("hi")
    const open = await this.modalCtrl.create({
      component: DeductSalaryPage,
      componentProps: {
        id: id
      },

    })
    // open.onDidDismiss().then((data => {
    //   if(data.data != null){
    //     this.getSalaries();
    //   }
    // }))
    return await open.present()
  };

  paySalary(id){
    this.salary.salaryId = id;
    this.salary.companyId = localStorage.companyId;
    console.log(this.salary);
    this.salaryService.paySalary(this.salary).subscribe((res)=>{
      console.log(res);
    })
  };

}
