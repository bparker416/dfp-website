import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private apiUrl = 'http://localhost:8080/api/public/drinks';

  constructor(private http: HttpClient) { }

  getDrinks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
