import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {map, take} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuthenticated().pipe(
    take(1),
    map(isAuth => {
      if (!isAuth) {
        router.navigate(['/login'], { queryParams: { returnUrl: state.url}});
        return false;
      }
      return true;
    })
  )
};
