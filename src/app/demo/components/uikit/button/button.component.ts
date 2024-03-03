import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    ToggleButtonModule,
  ],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  items: MenuItem[] = [];

  loading = [false, false, false, false];

  ngOnInit() {
    this.items = [
      { label: 'Update', icon: 'pi pi-refresh' },
      { label: 'Delete', icon: 'pi pi-times' },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog' },
    ];
  }

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }
}
