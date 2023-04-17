import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Error500Interceptor } from './error-interceptor.interceptor';

describe('Error500Interceptor', () => {
  let interceptor: Error500Interceptor;
  let httpHandler: HttpHandler;
  let httpHandlerMock: HttpHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Error500Interceptor],
    });

    interceptor = TestBed.inject(Error500Interceptor);
    httpHandler = {
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        // Simulate a successful HTTP response
        return new Observable((observer) => {
          observer.next(new HttpResponse({ status: 200 }));
          observer.complete();
        });
      },
    } as HttpHandler;
    httpHandlerMock = {
      handle: jest.fn(),
    } as unknown as HttpHandler;
  });

  describe('intercept', () => {
    it('should handle error 500 and show error message', () => {
      // Arrange
      const error = new HttpErrorResponse({
        status: 500,
        statusText: 'Internal Server Error',
      });
      const expectedMessage = 'Error interno del servidor';
      const spyFire = jest
        .spyOn(Swal, 'fire')
        .mockImplementation(() => Promise.resolve() as any);

      // Act
      const result = interceptor
        .intercept({} as HttpRequest<any>, httpHandler)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            return throwError(err);
          })
        );

      // Assert
      result.subscribe(
        () => {
          fail('Se esperaba un error');
        },
        (err: HttpErrorResponse) => {
          expect(err.status).toBe(500);
          expect(spyFire).toHaveBeenCalledWith({
            title: 'Error',
            text: expectedMessage,
            icon: 'error',
            confirmButtonText: 'Aceptar',
          });
        }
      );
    });
  });
});
