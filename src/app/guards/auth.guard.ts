import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number;
  claims: string[];
}

function hasClaim(claimType: string): boolean {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (!token) return false;

  try {
    const decoded: JwtPayload = jwtDecode(token);
    return decoded.claims && decoded.claims.includes(claimType);
  } catch (error) {
    console.error('Could not decode token', error);
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('ACCESS_TOKEN') && hasClaim('admin')) {
    return true;
  }

  router.navigateByUrl('/login');
  return false;
};
