import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import UserInfo from '../Models/Userinfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
  }

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  SendMail(userInfo: UserInfo) {
    return this.http.post(`${this.myAppUrl}/mail/sendmail`, userInfo, this.httpOptions);
  }
}
