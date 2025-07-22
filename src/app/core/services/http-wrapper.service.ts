import {HttpBackend, HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {firstValueFrom, Observable} from 'rxjs';
import {API_URL} from '../providers';

/**
 * This service wraps the Angular HttpClient to provide a consistent API for making HTTP requests
 * to the backend. It automatically prepends the API URL to the request URLs and provides
 * methods for all common HTTP methods (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS, and request).
 * It provides Promise and Observable versions
 */
@Injectable({
  providedIn: 'root',
})
export class HttpWrapper {
  #http = inject(HttpClient);
  #apiUrl = inject(API_URL);

  /**
   * HttpBackend is used to bypass interceptors and directly send requests to the backend.
   * This is useful for requests that should not be intercepted, such as health checks.
   * (e.g., for health checks or other direct requests).
   */
  httpBackend = new HttpClient(inject(HttpBackend));

  #buildUrl(url: string): string {
    return `${this.#apiUrl}/${url}`.replace(/\/+$/, '');
  }

  // RETURNS UNKNOWN
  get<T>(...args: Parameters<HttpClient['get']>): ReturnType<HttpClient['get']> {
    const [url, options] = args;
    return this.#http.get<T>(this.#buildUrl(url), options);
  }

  getObservable<T>(...args: Parameters<HttpClient['get']>): Observable<T> {
    const [url, options] = args;

    console.log(url);

    return this.#http.get<T>(this.#buildUrl(url), options);
  }

  getPromise<T>(...args: Parameters<HttpClient['get']>): Promise<T> {
    const [url, options] = args;
    return firstValueFrom(this.#http.get<T>(this.#buildUrl(url), options));
  }

  post<T>(...args: Parameters<HttpClient['post']>): ReturnType<HttpClient['post']> {
    const [url, body, options] = args;
    return this.#http.post<T>(this.#buildUrl(url), body, options);
  }

  put<T>(...args: Parameters<HttpClient['put']>): ReturnType<HttpClient['put']> {
    const [url, body, options] = args;
    return this.#http.put<T>(this.#buildUrl(url), body, options);
  }

  patch<T>(...args: Parameters<HttpClient['patch']>): ReturnType<HttpClient['patch']> {
    const [url, body, options] = args;
    return this.#http.patch<T>(this.#buildUrl(url), body, options);
  }

  delete<T>(...args: Parameters<HttpClient['delete']>): ReturnType<HttpClient['delete']> {
    const [url, options] = args;
    return this.#http.delete<T>(this.#buildUrl(url), options);
  }

  head<T>(...args: Parameters<HttpClient['head']>): ReturnType<HttpClient['head']> {
    const [url, options] = args;
    return this.#http.head<T>(this.#buildUrl(url), options);
  }

  options<T>(...args: Parameters<HttpClient['options']>): ReturnType<HttpClient['options']> {
    const [url, options] = args;
    return this.#http.options<T>(this.#buildUrl(url), options);
  }

  request<T>(...args: Parameters<HttpClient['request']>): ReturnType<HttpClient['request']> {
    return this.#http.request(...args) as ReturnType<HttpClient['request']> & Promise<T>;
  }
}
