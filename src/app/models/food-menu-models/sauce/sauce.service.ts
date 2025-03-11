import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Sauce} from "./sauce";

@Injectable({
  providedIn: 'root'
})
export class SauceService {

  private apiUrl = "https://dfp-backend-iz97.onrender.com/api/public/sauce";

  constructor(private http: HttpClient) { }

  getSauces(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveSauces(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getSaucesById(id: number): Observable<Sauce> {
    return this.http.get<Sauce>(`${this.apiUrl}/${id}`);
  }

  createSauce(sauce: Sauce): Observable<Sauce> {
    return this.http.post<Sauce>(this.apiUrl, sauce);
  }

  updateSauce(id: number, sauce: Sauce): Observable<Sauce> {
    return this.http.put<Sauce>(`${this.apiUrl}/${id}`, sauce);
  }

  deleteSauce(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleSauceActive(id: number): Observable<Sauce> {
    return this.http.put<Sauce>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
