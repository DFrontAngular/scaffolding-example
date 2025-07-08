import {CanMatchFn} from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {
  console.log('Auth guard triggered', route, segments);
  return true;
};
