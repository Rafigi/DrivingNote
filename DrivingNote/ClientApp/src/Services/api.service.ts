import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private readonly _localApiString: string = 'https://localhost:44336/'

  constructor(private http: HttpClient) {

  }

  SendMail(data: string): Observable<object> {
    return this.http.post(this._localApiString, data);
  }
}
