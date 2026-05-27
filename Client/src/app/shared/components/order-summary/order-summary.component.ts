import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-order-summary',
  imports: [
    CurrencyPipe,
    RouterLink,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput
  ],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss',
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
}
