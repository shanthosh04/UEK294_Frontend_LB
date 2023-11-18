import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  // Die 'intercept' Methode wird aufgerufen, um HTTP-Anfragen zu bearbeiten
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Überprüfen, ob ein ACCESS_TOKEN im localStorage vorhanden ist
    if (localStorage.getItem("ACCESS_TOKEN")) {
      // Wenn ACCESS_TOKEN vorhanden ist, füge den Token als 'Authorization'-Header zur Anfrage hinzu
      return next.handle(request.clone({
        setHeaders: {
          'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        }
      }));
    }
    // Wenn kein ACCESS_TOKEN vorhanden ist, führe die Anfrage ohne Änderungen durch
    return next.handle(request);
  }
}
