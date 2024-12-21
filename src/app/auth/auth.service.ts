import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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
    const body = new HttpParams()
    .set('username', username)
      .set('password', password);

    return this.http.post(`${this.baseUrl}/login`, body.toString(), {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
      withCredentials: true,
    });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, {
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
