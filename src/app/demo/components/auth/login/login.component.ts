import { Component } from '@angular/core';
import { LayoutService } from '../../../../layout/services/layout.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CheckboxModule, PasswordModule],
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent {
  valCheck: string[] = ['remember'];

  password!: string;

  constructor(public layoutService: LayoutService) {}
}
