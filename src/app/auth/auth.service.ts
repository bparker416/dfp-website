import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:8080/api/public/auth";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post('${this.baseUrl}/login', loginData, {
      headers,
      withCredentials: true,
    });
  }

  logout(): Observable<any> {
    return this.http.post('${this.baseUrl}/logout', {}, {
      withCredentials: true,
    });
  }

  isAuthenticated(): Observable<boolean> {
    return new Observable(observer => {
      this.http.get(`${this.baseUrl}/check`, { withCredentials: true })
        .subscribe({
          next: () => {
            observer.next(true);
            observer.complete();
          },
          error: () => {
            observer.next(false);
            observer.complete();
          }
        });
    });
  }
}
