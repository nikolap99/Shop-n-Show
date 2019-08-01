import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number;
  constructor() {}

  ngOnInit() {
    let { quantity = 0 } = { ...this.product };
    this.quantity = quantity;
  }

  incrementProduct() {
    this.quantity++;
  }
  decrementProduct() {
    if (this.quantity > 1) this.quantity--;
  }

  removeCartItem() {
    alert('removed');
  }
}
