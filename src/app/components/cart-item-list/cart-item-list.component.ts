import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getCartProducts();
    console.log(this.products);
  }

  getCartProducts(): void {
    this.productService
      .getCartProducts()
      .subscribe(product => (this.products = product));
  }
}
