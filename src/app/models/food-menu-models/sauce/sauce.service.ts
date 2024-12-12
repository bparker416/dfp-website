import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SauceService {

  private apiUrl = "http://localhost:8080/api/public/sauce/sauce-active";

  constructor(private http: HttpClient) { }

  getSauces(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
