import { Route } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { EmptyComponent } from './empty/empty.component';
import { TimelineComponent } from './timeline/timeline.component';

export const PagesRoutes: Route[] = [
  { path: 'crud', component: CrudComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: '**', redirectTo: '/notfound' },
];
