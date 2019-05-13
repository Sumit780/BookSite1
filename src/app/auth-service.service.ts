import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   num: number;
   path: string;
  dataGet(url) {
   return this.httpClient.get<any>(url);
  }

  getClick(x: number) {
    this.num = x;
  }

  urlpost(x: string) {
    this.path = x;
  }

  constructor(private httpClient: HttpClient) { }
}
