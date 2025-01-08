import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../../drink-menu-models/drinks/drinks";
import {Sando} from "./sando";

@Injectable({
  providedIn: 'root'
})
export class SandoService {

  private apiUrl = "http://localhost:8080/api/public/sando";

  constructor(private http: HttpClient) { }

  getSandos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  getActiveSandos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active`);
  }

  getSandosById(id: number): Observable<Sando> {
    return this.http.get<Sando>(`${this.apiUrl}/${id}`);
  }

  createSando(sando: Sando): Observable<Sando> {
    return this.http.post<Sando>(this.apiUrl, sando);
  }

  updateSando(id: number, sando: Sando): Observable<Sando> {
    return this.http.put<Sando>(`${this.apiUrl}/${id}`, sando);
  }

  deleteSando(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleSandoActive(id: number): Observable<Sando> {
    return this.http.put<Sando>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
