import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";
import {ledgerUrl} from '../modals/ledgerUrl';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  constructor(private http: HttpClient,private router: Router, private loginService: LoginService) { }

  getLedger() {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<any[]>(ledgerUrl + "api/ledger", httpOptions)
      .pipe();
  };

  getLedgerById(id:string){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<any[]>(ledgerUrl + "api/ledger/" + id, httpOptions)
      .pipe();
  };

  deleteLedger(id: string) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .delete<any>(ledgerUrl + "api/ledger/" + id, httpOptions)
      .pipe();
  };

  getCompanyBalance() {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<any[]>(ledgerUrl + "api/company_balance", httpOptions)
      .pipe();
  };
}


