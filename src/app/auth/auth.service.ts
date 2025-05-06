import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {response} from "express";
import {environment} from "../../environment/environment.development";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json',});

    return this.http.post(`${this.baseUrl}/public/auth/login`,
      { username, password },
      { headers }
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/public/auth/logout`, {}, {
      withCredentials: true,
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/public/auth/check`, { withCredentials: true })
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
    return this.http.get(`${environment.apiUrl}/updates`, {})
  }
}
