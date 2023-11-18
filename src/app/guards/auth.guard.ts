import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from "jwt-decode";

// Schnittstelle für die Payload-Daten im JWT-Token
interface JwtPayload {
  exp: number;
  claims: string[];
}

// Funktion zur Überprüfung, ob ein bestimmter Anspruch im JWT-Token vorhanden ist
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

// AuthGuard-Funktion, die überprüft, ob ein Benutzer autorisiert ist
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Überprüfen, ob ein ACCESS_TOKEN im localStorage vorhanden ist und ob der Benutzer den Anspruch 'admin' hat
  if (localStorage.getItem('ACCESS_TOKEN') && hasClaim('admin')) {
    return true; // Der Benutzer ist autorisiert
  }

  // Wenn nicht autorisiert, leite den Benutzer zur Login-Seite weiter
  router.navigateByUrl('/login');
  return false; // Der Benutzer ist nicht autorisiert
};
