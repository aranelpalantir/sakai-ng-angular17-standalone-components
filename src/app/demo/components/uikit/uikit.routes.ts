import { Route } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ChartsComponent } from './charts/charts.component';
import { FileComponent } from './file/file.component';
import { FloatlabelComponent } from './floatlabel/floatlabel.component';
import { InputComponent } from './input/input.component';
import { FormlayoutComponent } from './formlayout/formlayout.component';
import { InvalidstateComponent } from './invalidstate/invalidstate.component';
import { ListComponent } from './list/list.component';
import { MediaComponent } from './media/media.component';
import { MessageComponent } from './message/message.component';
import { MiscComponent } from './misc/misc.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PanelComponent } from './panel/panel.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { MenuComponent } from './menu/menu.component';

export const UikitRoutes: Route[] = [
  {
    path: 'button',
    data: { breadcrumb: 'Button' },
    component: ButtonComponent,
  },
  {
    path: 'charts',
    data: { breadcrumb: 'Charts' },
    component: ChartsComponent,
  },
  {
    path: 'file',
    data: { breadcrumb: 'File' },
    component: FileComponent,
  },
  {
    path: 'floatlabel',
    data: { breadcrumb: 'Float Label' },
    component: FloatlabelComponent,
  },
  {
    path: 'formlayout',
    data: { breadcrumb: 'Form Layout' },
    component: FormlayoutComponent,
  },
  {
    path: 'input',
    data: { breadcrumb: 'Input' },
    component: InputComponent,
  },
  {
    path: 'invalidstate',
    data: { breadcrumb: 'Incalid State' },
    component: InvalidstateComponent,
  },
  {
    path: 'list',
    data: { breadcrumb: 'List' },
    component: ListComponent,
  },
  {
    path: 'media',
    data: { breadcrumb: 'Media' },
    component: MediaComponent,
  },
  {
    path: 'message',
    data: { breadcrumb: 'Message' },
    component: MessageComponent,
  },
  {
    path: 'misc',
    data: { breadcrumb: 'Misc' },
    component: MiscComponent,
  },
  {
    path: 'overlay',
    data: { breadcrumb: 'Overlay' },
    component: OverlayComponent,
  },
  {
    path: 'panel',
    data: { breadcrumb: 'Panel' },
    component: PanelComponent,
  },
  {
    path: 'table',
    data: { breadcrumb: 'Table' },
    component: TableComponent,
  },
  {
    path: 'tree',
    data: { breadcrumb: 'Tree' },
    component: TreeComponent,
  },
  {
    path: 'menu',
    data: { breadcrumb: 'Menu' },
    component: MenuComponent,
  },
  { path: '**', redirectTo: '/notfound' },
];
