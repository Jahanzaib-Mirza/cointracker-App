import { Component, OnInit } from '@angular/core';
import { SalaryService } from 'src/app/services/salary.service';

@Component({
  selector: 'app-salary-record',
  templateUrl: './salary-record.page.html',
  styleUrls: ['./salary-record.page.scss'],
})
export class SalaryRecordPage implements OnInit {
paidSalaries:any;
  constructor(private salaryService: SalaryService) { 
    this.getPaidSalaries();
  }

  ngOnInit() {
  }

  getPaidSalaries(){
    this.salaryService.getPaidSalaries().subscribe((res)=>{
      this.paidSalaries = res;
      console.log(res);
    })
  }
}
