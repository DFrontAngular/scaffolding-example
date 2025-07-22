import {
  ApplicationConfig,
  DOCUMENT,
  provideAppInitializer,
  provideEnvironmentInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {provideRouter, withRouterConfig} from '@angular/router';

import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {of} from 'rxjs';
import {routes} from './app.routes';
import {authInterceptor} from './core/interceptors';
import {WINDOW_SSR, windowProvider} from './core/providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(withFetch()),
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
    // This is only necessary if you app has SSR
    {
      provide: WINDOW_SSR,
      useFactory: (document: Document) => windowProvider(document),
      deps: [DOCUMENT],
    },
  ],
};
