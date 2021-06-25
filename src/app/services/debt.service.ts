import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";
import { debts } from '../modals/debt';
import { accountUrl } from '../modals/accountUrl';
import { updateDebt } from '../modals/updateDebt';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

  addDebt(debt: debts): Observable<debts> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<debts>(accountUrl + "api/debt", debt, httpOptions)
      .pipe();
  };

  updateDebt(debt: updateDebt): Observable<debts> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .put<debts>(accountUrl + "api/debt", debt, httpOptions)
      .pipe();
  };

  getDebts() {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<debts[]>(accountUrl + "api/debt",httpOptions)
      .pipe();
  };

  getDebt(id) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<debts[]>(accountUrl + "api/debt/" + id ,httpOptions)
      .pipe();
  };

  deleteDebt(id) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .delete<debts[]>(accountUrl + "api/debt/"+id,httpOptions)
      .pipe();
  };
}
