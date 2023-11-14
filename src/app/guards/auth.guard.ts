import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";


function hasClaim(admin: string) {
  return false;
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if(localStorage.getItem("ACCESS_TOKEN") && hasClaim("admin")){
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};

