import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private miServicioSeguridad:SeguridadService,
    private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.miServicioSeguridad.usuarioSesionActiva){
      request=request.clone({
        setHeaders:{
          Authorization: `Bearer ${this.miServicioSeguridad.usuarioSesionActiva.token}`
        }
      })
    };
    return next.handle(request).pipe(
      catchError(
        (er: HttpErrorResponse)=>{
          if(er.status === 401){
            this.router.navigateByUrl('');
          }
          return throwError(er);
        }
      )
    );
  }
}
