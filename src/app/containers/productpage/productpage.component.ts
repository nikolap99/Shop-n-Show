import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductService } from '../../product.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {
  product = {};
  quantity = 1;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  goBack() {
    this.location.back();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService
      .getProducts()
      .subscribe(
        products => (this.product = products.find(product => product.id == id))
      );
    console.log('got product!');
  }

  incrementProduct() {
    this.quantity++;
  }

  decrementProduct() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    //this.productService.
  }
}
