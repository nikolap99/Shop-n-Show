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
  quantityDifference: number = 0;
  isClicked: boolean = false;
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
  myVar;
  addToCart(count) {
    this.isClicked = true;
    this.quantityDifference += count;
    clearTimeout(this.myVar);
    this.myVar = setTimeout(() => {
      this.productService.addToCart(this.product, this.quantityDifference);
      this.quantityDifference = 0;
    }, 600);
  }

  removeCartItem() {
    alert('removed');
  }
}
