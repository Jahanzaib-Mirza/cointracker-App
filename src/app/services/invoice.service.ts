import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";
import { invoice } from '../modals/invoice';
import { invoiceUrl } from '../modals/invoiceUrl';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient,private router: Router, private loginService: LoginService) { }

  addInvoice(invoice: invoice): Observable<invoice> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<invoice>(invoiceUrl + "api/invoice", invoice, httpOptions)
      .pipe();
  };

  getInvoice(){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<invoice>(invoiceUrl + "api/invoice", httpOptions)
      .pipe();
  };
}
