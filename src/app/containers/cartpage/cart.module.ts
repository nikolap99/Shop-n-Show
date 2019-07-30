import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackButtonModule } from '../../components/back-button/back-button.module';

import { CartpageComponent } from './cartpage.component';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { CartBuyComponent } from '../../components/cart-buy/cart-buy.component';

@NgModule({
  declarations: [CartpageComponent, CartItemComponent, CartBuyComponent],
  imports: [CommonModule, RouterModule, BackButtonModule],
  exports: [CartpageComponent, CartItemComponent, CartBuyComponent]
})
export class CartModule {}
