import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { JwtHelperService } from "@auth0/angular-jwt";
import { userUrl } from '../modals/userUrl';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = false;
  private token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    public jwtHelper: JwtHelperService
  ) { }

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  request(method: string, route: string, data?: any) {
    const header = this.loggedIn
      ? { Authorization: `Bearer ${this.token}` }
      : undefined;

    return this.http.request(method, userUrl + route, {
      body: data,
      responseType: "text",
      observe: "body",
      headers: header,
    }).pipe(catchError(error => {
      console.log(error.error)
      if (error.error instanceof ErrorEvent) {
        window.alert(`Error: ${error.error}`);
      } else {
        window.alert(`Error: ${error.error}`);
      }
      return of([]);
    }));
  }

  getToken(): string {
    const token = localStorage.token;
    return token;
  };

  login(user) {
    if (user.Email !== "" && user.Password !== "") {
      return this.request("POST", "api/user/login", {
        Email: user.Email,
        Password: user.Password,
      }).subscribe((response: "text") => {
        this.token = response;
        this.setLoggedIn(true, this.token);

        const userData = {
          token: this.token,
        };
        localStorage.setItem("token", this.token);
        var decoded = jwt_decode(this.token);
        console.log(decoded);
        
        if (decoded['role'] == "SuperAdministrator") {
          this.router.navigateByUrl("/superadmin", { replaceUrl: true });
        }
        else if (decoded['role'] == "Admin") {
          localStorage.setItem("adminId", decoded['unique_name']);
          this.router.navigateByUrl("/admin", { replaceUrl: true });
        }
        else if (decoded['role'] == "Manager" || decoded['role'] == "Clerk" || decoded['role'] == "Accountant") {
          localStorage.setItem("userId", decoded['unique_name']);
          localStorage.setItem("companyId", decoded['CompanyId']);
          this.router.navigateByUrl("/company-portal", { replaceUrl: true });
        }
        // }else if(decoded['role'] == "Officer") {
        //   this.router.navigateByUrl("/officer", { replaceUrl: true });
        // }


      });
    }
  }

  getDecodedToken() {
    if (localStorage.token == null || localStorage.token == " ") {
      return false;
    }
    var decoded = jwt_decode(localStorage.token);
    //console.log(decoded)
    return decoded;
  }


}
