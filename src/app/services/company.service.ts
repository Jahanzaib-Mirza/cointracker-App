import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { company } from '../modals/company';
import { LoginService } from './login.service';
import { userUrl } from '../modals/userUrl';
import { updateCompany } from '../modals/updateCompany';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

  addCompany(company: company): Observable<company> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http.post<company>(userUrl + "api/company", company, httpOptions)
      .pipe();
  };

  getCompanies(){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<company[]>(userUrl + "api/company", httpOptions)
      .pipe();
  };

  getCompany(id:string){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<company[]>(userUrl + "api/company/" + id, httpOptions)
      .pipe();
  };

  getCompaniesOfAdmin(id:string){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<company[]>(userUrl + "api/company/admin/" + id, httpOptions);
  };

  deleteCompany(id: string) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .delete<company>(userUrl + "api/company/" + id, httpOptions)
      .pipe();
  };

  updateCompany(company: updateCompany): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .put<any>(
        userUrl + "api/company",
        company,
        httpOptions
      )
      .pipe();
  }

}
