import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartList = [];
  productList = [];
  productsUrl = './assets/products.json';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  getProducts() {
    return this.http.get(this.productsUrl);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(product: object) {
    this.cartList.push(product);
    console.log(this.cartList);
  }
}
