import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "./drinks";

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private apiUrl = 'http://localhost:8080/api/public/drinks';

  constructor(private http: HttpClient) { }

  getDrinks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveDrinks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getDrinksById(id: number): Observable<Drinks> {
    return this.http.get<Drinks>(`${this.apiUrl}/${id}`);
  }

  createDrink(drink: Drinks): Observable<Drinks> {
    return this.http.post<Drinks>(this.apiUrl, drink);
  }

  updateDrink(id: number, drink: Drinks): Observable<Drinks> {
    return this.http.put<Drinks>(`${this.apiUrl}/${id}`, drink);
  }

  deleteDrink(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleDrinkActive(id: number): Observable<Drinks> {
    return this.http.put<Drinks>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
