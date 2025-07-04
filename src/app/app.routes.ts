import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'feature-1',
    loadChildren: () => import('./features/feature-1/feature-1.routes'),
  },
  {
    path: 'feature-2',
    loadChildren: () => import('./features/feature-2/feature-2.routes'),
  },
];
