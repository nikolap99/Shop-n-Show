import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackButtonModule } from '../../components/back-button/back-button.module';

import { CustomPipesModule } from '../../custom-pipes/custom-pipes.module';

import { CartpageComponent } from './cartpage.component';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { CartBuyComponent } from '../../components/cart-buy/cart-buy.component';
import { CartItemListComponent } from '../../components/cart-item-list/cart-item-list.component';

@NgModule({
  declarations: [
    CartpageComponent,
    CartItemComponent,
    CartBuyComponent,
    CartItemListComponent
  ],
  imports: [CommonModule, RouterModule, BackButtonModule, CustomPipesModule],
  exports: [
    CartpageComponent,
    CartItemComponent,
    CartBuyComponent,
    CartItemListComponent
  ]
})
export class CartModule {}
