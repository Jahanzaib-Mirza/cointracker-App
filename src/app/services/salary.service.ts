import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";
import { salary } from '../modals/salary';
import { salaryUrl } from '../modals/salaryUrl';
import { updateSalary } from '../modals/updateSalary';
import { deductSalary } from '../modals/deductSalary';
import { paySalary } from '../modals/paySalary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

  addSalary(salary: salary): Observable<salary> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<salary>(salaryUrl + "api/salary", salary, httpOptions)
      .pipe();
  };

  getSalaries() {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<salary[]>(salaryUrl + "api/salary")
      .pipe();
  };

  getSalary(id) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http.get<salary[]>(salaryUrl + "api/salary/" + id, httpOptions).pipe();

  }

  deleteSalary(id: string) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .delete<salary>(salaryUrl + "api/salary/" + id, httpOptions)
      .pipe();
  };

  updateSalary(salary: updateSalary): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .put<updateSalary>(
        salaryUrl + "api/salary",
        salary,
        httpOptions
      )
      .pipe();
  };

  deductSalary(salary: deductSalary): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<deductSalary>(
        salaryUrl + "api/salary_deduction",
        salary,
        httpOptions
      )
      .pipe();
  };

  getPaidSalaries(){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<any[]>(salaryUrl + "api/salary_paid")
      .pipe();
  }

  paySalary(salary:paySalary):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<paySalary>(
        salaryUrl + "api/salary_paid",
        salary,
        httpOptions
      )
      .pipe();
  }


}
