import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-buy',
  templateUrl: './cart-buy.component.html',
  styleUrls: ['./cart-buy.component.scss']
})
export class CartBuyComponent implements OnInit {
  cartPrice: number = 0;
  constructor() {}

  ngOnInit() {}
}
