import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { counter } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.scss']
})
export class CartBoxComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  cartCounter: number = 0;
  cartPrice: number = 0;
  _subscription;

  private _onDestroy$ = new Subject<void>();

  constructor(private productService: ProductService) {
    this.cartCounter = this.productService.cartListLength;
    this._subscription = productService.cartCounter$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(value => {
        let { counter = 0, price = 0 } = { ...value };
        this.cartCounter = counter;
        this.cartPrice = price;
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    // Prevent memory leak when component destroyed
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
