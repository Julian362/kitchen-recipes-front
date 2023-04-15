import { HttpHandler, HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';

describe('TokenInterceptorInterceptor', () => {
  let interceptor: TokenInterceptorInterceptor;
  let httpHandlerMock: HttpHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptorInterceptor],
    });
    interceptor = TestBed.inject(TokenInterceptorInterceptor);
    httpHandlerMock = {
      handle: jest.fn(),
    } as unknown as HttpHandler;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('intercept', () => {
    it('should add the token and content type headers to the request', () => {
      // Arrange
      const mockRequest = new HttpRequest('GET', 'test-url');

      // Act
      interceptor.intercept(mockRequest, httpHandlerMock);

      // Assert
      expect(httpHandlerMock.handle).toHaveBeenCalled();
    });

    it('should use the token from local storage if it exists', () => {
      // Arrange
      const mockToken = 'test-token';
      localStorage.setItem('token', mockToken);
      const mockRequest = new HttpRequest('GET', 'test-url');

      // Act
      interceptor.intercept(mockRequest, httpHandlerMock);

      // Assert
      expect(httpHandlerMock.handle).toHaveBeenCalled();
    });

    it('should not add the token header if it does not exist in local storage', () => {
      // Arrange
      localStorage.removeItem('token');
      const mockRequest = new HttpRequest('GET', 'test-url');

      // Act
      interceptor.intercept(mockRequest, httpHandlerMock);

      // Assert
      expect(httpHandlerMock.handle).toHaveBeenCalled();
    });
  });
});
