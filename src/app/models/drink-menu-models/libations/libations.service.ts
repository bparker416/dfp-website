import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Drinks} from "../drinks/drinks";
import {Libations} from "./libations";

@Injectable({
  providedIn: 'root'
})
export class LibationsService {

  private apiUrl = 'http://localhost:8080/api/public/seasonal-libations';

  constructor(private http: HttpClient) { }

  getLibations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getLibationsById(id: number): Observable<Libations> {
    return this.http.get<Libations>(`${this.apiUrl}/${id}`);
  }

  createLibation(libation: Libations): Observable<Libations> {
    return this.http.post<Libations>(this.apiUrl, libation);
  }

  updateLibation(id: number, libation: Libations): Observable<Libations> {
    return this.http.put<Libations>(`${this.apiUrl}/${id}`, libation);
  }

  deleteLibation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  toggleLibationActive(id: number): Observable<Libations> {
    return this.http.put<Libations>(`${this.apiUrl}/${id}/toggle`, {});
  }
}
