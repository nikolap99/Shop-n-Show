import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-cart-buy',
  templateUrl: './cart-buy.component.html',
  styleUrls: ['./cart-buy.component.scss']
})
export class CartBuyComponent implements OnInit {
  cartPrice: number = 0;
  isBought: boolean = false;
  isRemoved: boolean = false;
  timeInterval: number = 1500;
  _subscription;

  private _onDestroy$ = new Subject<void>();

  constructor(private productService: ProductService) {
    this.cartPrice = this.productService.cartListFullPrice;
    this._subscription = productService.cartCounter$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(value => {
        let { price = 0 } = { ...value };
        this.cartPrice = price;
      });
  }

  ngOnInit() {}

  buyAll() {
    this.isBought = true;
    setTimeout(() => {
      this.isBought = false;
      this.productService.removeAllFromCart();
    }, this.timeInterval);
  }
  removeAll() {
    this.isRemoved = true;
    this.productService.removeAllFromCart();
    setTimeout(() => {
      this.isRemoved = false;
    }, this.timeInterval);
  }

  ngOnDestroy() {
    // Prevent memory leak when component destroyed
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
