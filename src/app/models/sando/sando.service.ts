import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SandoService {

  private apiUrl = "http://localhost:8080/api/sando";

  constructor(private http: HttpClient) { }

  getSandos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
