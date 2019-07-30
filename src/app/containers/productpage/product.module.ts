import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BackButtonModule } from '../../components/back-button/back-button.module';
import { ProductItemModule } from '../../components/product-item/product-item.module';

import { ProductpageComponent } from './productpage.component';

@NgModule({
  declarations: [ProductpageComponent],
  imports: [CommonModule, RouterModule, ProductItemModule, BackButtonModule],
  exports: [ProductpageComponent]
})
export class ProductModule {}
