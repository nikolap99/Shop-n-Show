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

  get cartCounter$() {
    return this._cartCounter$.asObservable();
  }

  private _cartCounter$: Subject<number> = new Subject<number>();

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

  addToCart(product: Product, quantity: number): void {
    if (this.cartList[product.id]) {
      this.cartList[product.id].quantity += quantity;
    } else {
      this.cartList.push({ ...product, quantity: quantity });
    }
    // TODO: CHANGE COUNTER INSIDE CARTBOX IN HEADER
    this.cartListLength = this.cartList.reduce(
      (acc, obj) => acc + obj.quantity,
      0
    );
    this._cartCounter$.next(this.cartListLength);
  }
}
