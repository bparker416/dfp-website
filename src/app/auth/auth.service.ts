import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:8080";
  private tokenKey = 'auth-token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, {username, password});
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
