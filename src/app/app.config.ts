import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withRouterConfig} from '@angular/router';

import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {routes} from './app.routes';
import {authInterceptor} from './core/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withRouterConfig({})),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
  ],
};
