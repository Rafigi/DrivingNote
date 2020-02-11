import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import UserInfo from '../Models/Userinfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
  }

  httpOptions = {
    'responseType': 'arraybuffer' as 'json'
  };


  SendMail(userInfo: UserInfo): Observable<Blob> {
    return this.http.post<any>(`${this.myAppUrl}/api/mail/sendmail`, userInfo, this.httpOptions);
  }
}
