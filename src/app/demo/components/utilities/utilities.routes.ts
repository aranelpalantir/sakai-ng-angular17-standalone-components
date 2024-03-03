import { Route } from '@angular/router';
import { IconsComponent } from './icons/icons.component';

export const UtilitiesRoutes: Route[] = [
  {
    path: 'icons',
    data: { breadcrumb: 'Prime Icons' },
    component: IconsComponent,
  },
  { path: '**', redirectTo: '/notfound' },
];
