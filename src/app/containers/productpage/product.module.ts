import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductItemModule } from '../../components/product-item/product-item.module';

import { ProductpageComponent } from './productpage.component';

@NgModule({
  declarations: [ProductpageComponent],
  imports: [CommonModule, RouterModule, ProductItemModule],
  exports: [ProductpageComponent]
})
export class ProductModule {}
