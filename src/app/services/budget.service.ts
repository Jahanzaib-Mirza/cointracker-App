import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { accountUrl } from '../modals/accountUrl';
import { budgets } from '../modals/budgets';
import { LoginService } from './login.service';
import { updateBudget } from '../modals/updateBudget';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getbudgets(){
    const httpOptions ={
      headers : new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .get<budgets[]>(accountUrl + "api/budget", httpOptions)
    .pipe();
  };

  getBudget(id){
    const httpOptions ={
      headers : new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .get<budgets[]>(accountUrl + "api/budget/" + id, httpOptions)
    .pipe();
  };

  addBudget(budget: budgets):Observable<budgets>{
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .post<budgets>(accountUrl + "api/budget", budget , httpOptions )
    .pipe();
  };

  deleteBudget(id: string){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .delete<budgets>(accountUrl + "api/budget/" + id , httpOptions )
    .pipe();
  };

  updateBudget(budget: updateBudget): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .put<any>(
        accountUrl + "api/budget",
        budget,
        httpOptions
      )
      .pipe();
  }
}
