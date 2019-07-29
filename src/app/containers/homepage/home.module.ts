import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageComponent } from './homepage.component';
import { ProductItemComponent } from '../../components/product-item/product-item.component';

@NgModule({
  declarations: [HomepageComponent, ProductItemComponent],
  imports: [CommonModule],
  exports: [HomepageComponent, ProductItemComponent]
})
export class HomeModule {}
