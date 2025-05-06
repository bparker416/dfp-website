import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {PizzaModule} from "./pizza";
import {environment} from "../../../../environment/environment.development";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private apiUrl = `${environment.apiUrl}/public/pizza`;

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActivePizzas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getPizzaById(id: number): Observable<PizzaModule> {
    return this.http.get<PizzaModule>(`${this.apiUrl}/${id}`);
  }

  createPizza(pizza: PizzaModule): Observable<PizzaModule> {
    return this.http.post<PizzaModule>(this.apiUrl, pizza);
  }

  updatePizza(id: number, pizza: PizzaModule): Observable<PizzaModule> {
    return this.http.put<PizzaModule>(`${this.apiUrl}/${id}`, pizza);
  }

  deletePizza(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  togglePizzaActive(id: number): Observable<PizzaModule> {
    return this.http.put<PizzaModule>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
