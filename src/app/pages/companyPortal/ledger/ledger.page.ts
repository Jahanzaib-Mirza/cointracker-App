import { Component, OnInit } from '@angular/core';
import { LedgerService } from 'src/app/services/ledger.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.page.html',
  styleUrls: ['./ledger.page.scss'],
})
export class LedgerPage implements OnInit {

  ledger: any;
  constructor(private ledgerService: LedgerService,) { 
    this.getLedger();
    this.getCompanyBalance();
  }

  ngOnInit() {
  }

  getLedger(){
    this.ledgerService.getLedger().subscribe((res)=>{
      console.log(res);
    })
  };

  getCompanyBalance(){
    this.ledgerService.getCompanyBalance().subscribe((res)=>{
      console.log(res);
    })
  }
}
