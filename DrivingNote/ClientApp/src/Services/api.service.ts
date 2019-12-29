import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  private readonly apiString: string;

  constructor(private http: HttpClient) {

  }

  SendMail() {

  }
}
