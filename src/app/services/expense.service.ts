import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { accountUrl } from '../modals/accountUrl';
import { expenses } from '../modals/expenses';
import { LoginService } from './login.service';
import { updateExpense } from '../modals/updateExpense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private loginService: LoginService, private http: HttpClient) { }

  addExpense(expense: expenses): Observable<expenses> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .post<expenses>(accountUrl + "api/expense_tracking", expense, httpOptions)
    .pipe();
  }

  getExpenses(){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .get<expenses[]>(accountUrl + "api/expense_tracking", httpOptions)
    .pipe();
  };

  getExpense(id){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .get<expenses[]>(accountUrl + "api/expense_tracking/" + id, httpOptions)
    .pipe();
  };

  deleteExpenses(id){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .delete<expenses[]>(accountUrl + "api/expense_tracking/" + id, httpOptions)
    .pipe();
  };

  updateExpense(expense: updateExpense): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .put<any>(
        accountUrl + "api/expense_tracking",
        expense,
        httpOptions
      )
      .pipe();
  }
  
}
