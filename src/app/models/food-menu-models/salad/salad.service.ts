import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaladService {

  private apiUrl = "http://localhost:8080/api/public/salad";

  constructor(private http: HttpClient) {}

  getSalads(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
