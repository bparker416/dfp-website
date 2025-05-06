import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Appetizer} from "./appetizer";
import {environment} from "../../../../environment/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AppetizerService {

  private apiUrl = `${environment.apiUrl}/public/appetizer`;

  constructor(private http: HttpClient) {}

  getAppetizers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveAppetizers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getAppetizersById(id: number): Observable<Appetizer> {
    return this.http.get<Appetizer>(`${this.apiUrl}/${id}`);
  }

  createAppetizer(app: Appetizer): Observable<Appetizer> {
    return this.http.post<Appetizer>(this.apiUrl, app);
  }

  updateAppetizer(id: number, app: Appetizer): Observable<Appetizer> {
    return this.http.put<Appetizer>(`${this.apiUrl}/${id}`, app);
  }

  deleteAppetizer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleAppetizerActive(id: number): Observable<Appetizer> {
    return this.http.put<Appetizer>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
