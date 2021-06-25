import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { SalaryButtonsComponent } from 'src/app/components/salary-buttons/salary-buttons.component';
import { SalaryService } from 'src/app/services/salary.service';
import { AddSalaryPageModule } from '../add-salary/add-salary.module';
import { AddSalaryPage } from '../add-salary/add-salary.page';

@Component({
  selector: 'app-salary-portal',
  templateUrl: './salary-portal.page.html',
  styleUrls: ['./salary-portal.page.scss'],
})
export class SalaryPortalPage implements OnInit {

  salaries: any;

  constructor(private popCtrl: PopoverController, private salaryService: SalaryService, private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.getSalaries();

  }
  async openBtn(ev: any, id:string) {
    console.log(id)
    const open = await this.popCtrl.create({
      component: SalaryButtonsComponent,
      componentProps:{
        id:id
      },
      event: ev
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getSalaries();
      }
    }))
    return await open.present()
  };

  async openAddSalary() {
    console.log("hi")
    const open = await this.modalCtrl.create({
      component: AddSalaryPage,
      
    })
    open.onDidDismiss().then((data => {
      if(data.data != null){
        this.getSalaries();
      }
    }))
    return await open.present()
  }

  getSalaries() {
    this.salaryService.getSalaries().subscribe((res) => {
      console.log(res);
      this.salaries = res;
    })
  }

  // getSalariesofCompanies(){
  //   this.salaryService.getPaidSalaries().subscribe((res)=>{
  //     console.log(res)
  //   })
  // }

}
