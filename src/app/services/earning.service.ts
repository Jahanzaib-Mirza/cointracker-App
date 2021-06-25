import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accountUrl } from '../modals/accountUrl';
import { earnings } from '../modals/earnings';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EarningService {

  constructor(private loginService: LoginService,private http:HttpClient) { }


  addEarning(earning: earnings): Observable<earnings> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<earnings>(accountUrl + "api/earning", earning, httpOptions)
      .pipe();
  }
  getEarning(id){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http.get<earnings[]>(accountUrl + "api/earning/" + id, httpOptions).pipe();

  };

  getEarnings() {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<earnings[]>(accountUrl + "api/earning", httpOptions)
      .pipe();
  };

  deleteEarning(id: string) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .delete<earnings>(accountUrl + "api/earning/" + id, httpOptions)
      .pipe();
  };

  updateEarning(earning: earnings): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .put<any>(
        accountUrl + "api/earning",
        earning,
        httpOptions
      )
      .pipe();
  }
}
