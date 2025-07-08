import {
  ApplicationConfig,
  provideAppInitializer,
  provideEnvironmentInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {provideRouter, withRouterConfig} from '@angular/router';

import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {of} from 'rxjs';
import {routes} from './app.routes';
import {authInterceptor} from './core/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withRouterConfig({})),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideAppInitializer(() => {
      // This is where you can initialize your app, e.g., load configuration or check authentication
      return of(console.log('App initialized'));
    }),
    provideEnvironmentInitializer(() => {
      // This is where you can set up environment-specific configurations
      console.log('Environment initialized');
    }),
  ],
};
