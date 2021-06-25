import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accountUrl } from '../modals/accountUrl';
import { tax } from '../modals/tax';
import { updateTax } from '../modals/updateTax';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  constructor(private http: HttpClient,private loginService:LoginService) { }

  addTax(tax: tax):Observable<tax>{
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .post<tax>(accountUrl + "api/tax", tax , httpOptions )
    .pipe();
  };

  updateTax(tax: updateTax):Observable<tax>{
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .put<tax>(accountUrl + "api/tax", tax , httpOptions )
    .pipe();
  };

  getTaxes(){
    const httpOptions ={
      headers : new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .get<tax[]>(accountUrl + "api/tax",httpOptions)
    .pipe();
  };

  getTax(id){
    const httpOptions ={
      headers : new HttpHeaders().set(
        "Authorization",
        "Bearer" + this.loginService.getToken()
      ),
    };
    return this.http
    .get<tax[]>(accountUrl + "api/tax/" + id, httpOptions)
    .pipe();
  };

  deleteTax(id: string) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .delete<tax>(accountUrl + "api/tax/" + id, httpOptions)
      .pipe();
  };
}
