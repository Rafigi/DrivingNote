import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import UserInfo from '../Models/Userinfo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
  }

  SendMail(userInfo: UserInfo) {
    return this.http.post(`${this.myAppUrl}/api/mail/sendmail`, userInfo);
  }
}
