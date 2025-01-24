import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Salad} from "./salad";

@Injectable({
  providedIn: 'root'
})
export class SaladService {

  private apiUrl = "damn-fine-backend-afbfc8gqe6e6cmh0.westus-01.azurewebsites.net/api/public/salad";

  constructor(private http: HttpClient) {}

  getSalads(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveSalads(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getSaladsById(id: number): Observable<Salad> {
    return this.http.get<Salad>(`${this.apiUrl}/${id}`);
  }

  createSalad(salad: Salad): Observable<Salad> {
    return this.http.post<Salad>(this.apiUrl, salad);
  }

  updateSalad(id: number, salad: Salad): Observable<Salad> {
    return this.http.put<Salad>(`${this.apiUrl}/${id}`, salad);
  }

  deleteSalad(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleSaladActive(id: number): Observable<Salad> {
    return this.http.put<Salad>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
