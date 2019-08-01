import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}

  buyAll() {
    this.isBought = true;
    setTimeout(() => {
      this.isBought = false;
    }, this.timeInterval);
  }
  removeAll() {
    this.isRemoved = true;
    setTimeout(() => {
      this.isRemoved = false;
    }, this.timeInterval);
  }
}
