import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {HttpClientModule} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:8080/api/public/auth";

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json',});

    return this.http.post(`${this.baseUrl}/login`,
      { username, password },
      { headers }
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, {
      withCredentials: true,
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/check`, { withCredentials: true })
      .pipe(
        map(response => {
          console.log("Auth response check:", response);
          return response;
        }),
        catchError(error => {
          console.error("Auth failed check:", error);
          return of(false);
        })
      );
  }

  getUpdates(): Observable<any> {
    return this.http.get('http://localhost:8080/updates', {})
  }
}
