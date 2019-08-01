import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    let { quantity = 0 } = { ...this.product };
    this.quantity = quantity;
  }

  incrementProduct() {
    this.quantity++;
    this.addToCart(1);
  }
  decrementProduct() {
    if (this.quantity > 1) {
      this.quantity--;
      this.addToCart(-1);
    }
  }

  addToCart(count) {
    this.productService.addToCart(this.product, count);
  }

  removeCartItem() {
    alert('removed');
  }
}
