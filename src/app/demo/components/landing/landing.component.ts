import { Component } from '@angular/core';
import { LayoutService } from '../../../layout/services/layout.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule,
  ],
  templateUrl: './landing.component.html',
})
export class LandingComponent {
  constructor(public layoutService: LayoutService, public router: Router) {}
}
