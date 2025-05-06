import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {environment} from "../../environment/environment.development";

@Component({
  selector: 'app-login',
  imports: [
    FormsModule, CommonModule],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private baseUrl= environment.apiUrl;
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
  }

  onSubmit() {
    const body = {
      username: this.username,
      password: this.password
    };

    this.http.post(`${this.baseUrl}/public/auth/login`, body, {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      withCredentials: true
    })
      .subscribe({
        next: () => {
          this.router.navigate(['/updates']).then(() => console.log('Successfully logged in'));
        },
        error: err => {
          if (err.status === 401) {
            this.errorMessage = 'Login info bad.'
          } else {
            this.errorMessage = 'Idk man';
          }
        }
      });
  }
}
