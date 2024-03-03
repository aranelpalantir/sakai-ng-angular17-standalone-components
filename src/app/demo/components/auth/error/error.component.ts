import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './error.component.html',
})
export class ErrorComponent {}
