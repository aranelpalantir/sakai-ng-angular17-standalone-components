import { Route } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { DashboardComponent } from './demo/components/dashboard/dashboard.component';
import { DocumentationComponent } from './demo/components/documentation/documentation.component';
import { LandingComponent } from './demo/components/landing/landing.component';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { BlocksComponent } from './demo/components/primeblocks/blocks/blocks.component';
export const routes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'uikit',
        loadChildren: () =>
          import('./demo/components/uikit/uikit.routes').then(
            (mod) => mod.UikitRoutes
          ),
      },
      {
        path: 'utilities',
        loadChildren: () =>
          import('./demo/components/utilities/utilities.routes').then(
            (mod) => mod.UtilitiesRoutes
          ),
      },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'blocks', component: BlocksComponent },
      {
        path: 'pages',
        loadChildren: () =>
          import('./demo/components/pages/pages.routes').then(
            (mod) => mod.PagesRoutes
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./demo/components/auth/auth.routes').then(
        (mod) => mod.AuthRoutes
      ),
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  { path: 'notfound', component: NotfoundComponent },
];
