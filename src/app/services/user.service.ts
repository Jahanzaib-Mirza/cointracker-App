import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";
import {userUrl} from '../modals/userUrl';
import {users} from '../modals/users';
import { updateUser } from "../modals/updateUser";
import { admins } from '../modals/admins';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private router: Router, private loginService: LoginService) { }

  addClerk(user: users): Observable<users> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<users>(userUrl + "api/user/clerk", user, httpOptions)
      .pipe();
  };

  addAccountant(user: users): Observable<users> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<users>(userUrl + "api/user/accountant", user, httpOptions)
      .pipe();
  };

  addManager(user: users): Observable<users> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<users>(userUrl + "api/user/manager", user, httpOptions)
      .pipe();
  };

  addAdmin(admin: admins): Observable<admins> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .post<admins>(userUrl + "api/user/admin", admin, httpOptions)
      .pipe();
  };

  getAllUsers() {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<users[]>(userUrl + "api/user", httpOptions)
      .pipe();
  };

  getAdmins() {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<users[]>(userUrl + "api/user/admin", httpOptions)
      .pipe();
  };

  getAccountants(id) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<users[]>(userUrl + "api/user/accountant/" + id, httpOptions)
      .pipe();
  };

  getClerks(id) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<users[]>(userUrl + "api/user/clerk/" + id, httpOptions)
      .pipe();
  };

  getManagers(id) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .get<users[]>(userUrl + "api/user/manager/" + id, httpOptions)
      .pipe();
  };



  getUser(id){
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http.get<users[]>(userUrl + "api/user/" + id, httpOptions).pipe();

  }

  deleteUser(id: string) {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .delete<users>(userUrl + "api/user/" + id, httpOptions)
      .pipe();
  };

  updateUser(user: updateUser): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer " + this.loginService.getToken()
      ),
    };
    return this.http
      .put<any>(
        userUrl + "api/user",
        user,
        httpOptions
      )
      .pipe();
  }
}
