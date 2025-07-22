import {InjectionToken} from '@angular/core';
import {environment} from '@environments/environment.development';

export const API_URL = new InjectionToken<string>('api-url', {
  providedIn: 'root',
  factory: () => environment.apiUrl,
});
