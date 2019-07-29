import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number = 1;
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  incrementProduct() {
    this.quantity++;
  }
  decrementProduct() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    this.productService.addToCart(this.product, this.quantity);
  }
}
