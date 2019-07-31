import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cart-buy',
  templateUrl: './cart-buy.component.html',
  styleUrls: ['./cart-buy.component.scss']
})
export class CartBuyComponent implements OnInit {
  cartPrice: number = 0;
  isTrue: boolean;
  constructor() {}

  ngOnInit() {
    this.isTrue = true;
    setTimeout(() => {
      this.isTrue = false;
      console.log('hello');
    }, 1000);
  }
}
