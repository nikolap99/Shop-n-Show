import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  isShort: boolean;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.checkUrlId();
  }

  incrementProduct() {
    this.quantity++;
  }
  decrementProduct() {
    if (this.quantity > 1) this.quantity--;
  }

  checkUrlId() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.isShort = false;
    } else {
      this.isShort = true;
    }
  }

  /*addToCart() {
    this.productService.addToCart(this.product, this.quantity);
  }*/
}
