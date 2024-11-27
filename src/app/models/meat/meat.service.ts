import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeatService {

  private apiUrlThree = "http://localhost:5000/api/meat/price-is-three";

  private apiUrlFour = "http://localhost:5000/api/meat/price-is-four";

  constructor(private http: HttpClient) {}

  meatPriceByThree(): Observable<any> {
    return this.http.get(this.apiUrlThree);
  }

  meatPriceByFour(): Observable<any> {
    return this.http.get(this.apiUrlFour);
  }

}
