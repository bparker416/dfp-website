import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {PizzaModule} from "./pizza";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private apiUrl = 'damn-fine-backend-afbfc8gqe6e6cmh0.westus-01.azurewebsites.net/api/public/pizza';

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
