import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dessert} from "./dessert";

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  private apiUrl = "damn-fine-backend-afbfc8gqe6e6cmh0.westus-01.azurewebsites.net/api/public/dessert";

  constructor(private http: HttpClient) {}

  getDesserts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveDesserts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getDessertsById(id: number): Observable<Dessert> {
    return this.http.get<Dessert>(`${this.apiUrl}/${id}`);
  }

  createDessert(dessert: Dessert): Observable<Dessert> {
    return this.http.post<Dessert>(this.apiUrl, dessert);
  }

  updateDessert(id: number, dessert: Dessert): Observable<Dessert> {
    return this.http.put<Dessert>(`${this.apiUrl}/${id}`, dessert);
  }

  deleteDessert(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleDessertActive(id: number): Observable<Dessert> {
    return this.http.put<Dessert>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
