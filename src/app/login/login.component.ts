import { Component } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, CommonModule, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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

    this.http.post('damn-fine-backend-afbfc8gqe6e6cmh0.westus-01.azurewebsites.net/api/public/auth/login', body, {
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
