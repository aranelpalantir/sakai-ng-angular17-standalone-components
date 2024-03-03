import { Route } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AccessComponent } from './access/access.component';
import { LoginComponent } from './login/login.component';

export const AuthRoutes: Route[] = [
  { path: 'error', component: ErrorComponent },
  { path: 'access', component: AccessComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/notfound' },
];
