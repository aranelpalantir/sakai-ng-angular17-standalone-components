import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FieldsetModule } from 'primeng/fieldset';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    AccordionModule,
    TabViewModule,
    FieldsetModule,
    MenuModule,
    InputTextModule,
    DividerModule,
    SplitterModule,
    PanelModule,
  ],
  templateUrl: './panel.component.html',
})
export class PanelComponent implements OnInit {
  items: MenuItem[] = [];

  cardMenu: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Angular.io',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      { label: 'Theming', icon: 'pi pi-bookmark', routerLink: ['/theming'] },
    ];

    this.cardMenu = [
      {
        label: 'Save',
        icon: 'pi pi-fw pi-check',
      },
      {
        label: 'Update',
        icon: 'pi pi-fw pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
      },
    ];
  }
}
