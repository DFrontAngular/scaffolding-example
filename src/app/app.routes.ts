import {Routes} from '@angular/router';
import {authGuard} from './core/guards';

export const routes: Routes = [
  {
    path: 'feature-1',
    loadChildren: () => import('./features/feature-1/feature-1.routes'),
    canMatch: [authGuard],
  },
  {
    path: '',
    redirectTo: 'feature-1',
    pathMatch: 'full',
  },
];
