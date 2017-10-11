import { HttpRequest } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { HttpErrorInterceptor } from './httpError.interceptor';

describe('HttpErrorInterceptor', () => {
  it(
    'should handle the http request',

    async(() => {
      const interceptor = new HttpErrorInterceptor();
      const req = new HttpRequest<any>('GET', 'url');
      const expectedResponse = { prop: 1 };

      const next = {
        handle: jest.fn().mockReturnValue(Observable.of(expectedResponse)),
      };

      interceptor.intercept(req, next).subscribe(response => {
        expect(next.handle).toBeCalledWith(req);
        expect(response).toBe(expectedResponse);
      });
    })
  );

  it(
    'should handle errors for GET methods',
    async(() => {
      const interceptor = new HttpErrorInterceptor();
      const req = new HttpRequest<any>('GET', 'url');

      const next = {
        handle: jest.fn().mockReturnValue(Observable.throw(new Error('oeps'))),
      };

      interceptor.intercept(req, next).subscribe(
        response => {},
        error => {
          expect(error.message).toBe(
            'Er is een fout opgetreden bij het ophalen van de gegevens. Probeer later opnieuw.'
          );
        }
      );
    })
  );

  it(
    'should handle errors for other methods',
    async(() => {
      const interceptor = new HttpErrorInterceptor();
      const req = new HttpRequest<any>('DELETE', 'url');

      const next = {
        handle: jest.fn().mockReturnValue(Observable.throw(new Error('oeps'))),
      };

      interceptor.intercept(req, next).subscribe(
        response => {},
        error => {
          expect(error.message).toBe(
            'Er is een fout opgetreden bij het verwerken van de gegevens. Probeer later opnieuw.'
          );
        }
      );
    })
  );
});
