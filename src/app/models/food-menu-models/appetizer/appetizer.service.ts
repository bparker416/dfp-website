import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppetizerService {

  private apiUrl = 'http://localhost:8080/api/public/appetizer';

  constructor(private http: HttpClient) {}

  getAppetizers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
