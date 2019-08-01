import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss']
})
export class CartItemListComponent implements OnInit {
  products: Product[] = [];
  _subscription;

  private _onDestroy$ = new Subject<void>();

  constructor(private productService: ProductService) {
    this.products = this.productService.cartList;
    this._subscription = productService.cartList$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(value => {
        let { products = [] } = { ...value };
        this.products = products;
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    // Prevent memory leak when component destroyed
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
