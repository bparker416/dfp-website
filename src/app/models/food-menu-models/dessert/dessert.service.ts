import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  private apiUrl = "http://localhost:8080/api/public/dessert";

  constructor(private http: HttpClient) {}

  getDesserts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
