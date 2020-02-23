import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import UserInformation from '../Models/UserInformation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private myAppUrl: string;
  private AppUrlHost: string = window.location.origin;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
  }

  httpOptions = {
    'responseType': 'arraybuffer' as 'json'
  };

  SendMail(userInformation: UserInformation): Observable<Blob> {
    return this.http.post<any>(`${this.AppUrlHost}/api/mail/sendmail`, userInformation, this.httpOptions);
  }


  //SendMail(userInformation: UserInformation): Observable<Blob> {
  //  return this.http.post<any>(`${this.myAppUrl}/api/mail/sendmail`, userInformation, this.httpOptions);
  //}
}
