import { Injectable, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartList = [];
  productList = [];
  cartListLength: number = 0;
  cartListFullPrice: number = 0;

  get cartCounter$() {
    return this._cartCounter$.asObservable();
  }
  get cartList$() {
    return this._cartList$.asObservable();
  }

  private _cartCounter$: Subject<object> = new Subject<object>();
  private _cartList$: Subject<object> = new Subject<object>();

  private productsUrl = './assets/products.json';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(_ => console.log('fetched products')),
      catchError(this.handleError<any>('error'))
    );
  }

  goBack(): void {
    this.location.back();
  }

  calculateLength(): void {
    this.cartListLength = this.cartList.reduce(
      (acc, obj) => acc + obj.quantity,
      0
    );
  }
  calculatePrice(): void {
    this.cartListFullPrice = this.cartList.reduce(
      (acc, obj) => acc + obj.price * obj.quantity,
      0
    );
  }

  addToCart(product: Product, quantity: number): void {
    if (this.cartList.find(x => x.id === product.id)) {
      this.cartList.find(x => x.id === product.id).quantity += quantity;
    } else {
      this.cartList.push({ ...product, quantity: quantity });
    }
    // CHANGE COUNTER INSIDE CARTBOX IN HEADER
    this.calculateLength();
    this.calculatePrice();

    // Sending object to subscribers
    this._cartCounter$.next({
      counter: this.cartListLength,
      price: this.cartListFullPrice
    });
  }

  // Remove all items from cart
  removeAllFromCart(): void {
    this.cartList = [];
    this.cartListLength = 0;
    this.cartListFullPrice = 0;

    // List of items in cart
    this._cartList$.next({
      products: this.cartList
    });
    // Cart counter in header
    this._cartCounter$.next({
      counter: this.cartListLength,
      price: this.cartListFullPrice
    });
  }

  // Remove one item from cart
  removeFromCart(productId): void {
    if (this.cartList.find(x => x.id === productId)) {
      let index = this.cartList.findIndex(obj => {
        return obj.id === productId;
      });
      if (index > -1) {
        this.cartList.splice(index, 1);
      }
    }
    this.calculateLength();
    this.calculatePrice();
    this._cartCounter$.next({
      counter: this.cartListLength,
      price: this.cartListFullPrice
    });
  }
}
