// more info at https://angular.io/guide/http#intercepting-all-requests-or-responses
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).catch(err => {
      let errorMessage =
        'Er is een fout opgetreden bij het verwerken van de gegevens. Probeer later opnieuw.';
      if (req.method === 'GET') {
        errorMessage =
          'Er is een fout opgetreden bij het ophalen van de gegevens. Probeer later opnieuw.';
      }

      return Observable.throw(new Error(errorMessage));
    });
  }
}
