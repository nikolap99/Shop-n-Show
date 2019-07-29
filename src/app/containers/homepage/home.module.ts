import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { ProductItemComponent } from '../../components/product-item/product-item.component';

@NgModule({
  declarations: [HomepageComponent, ProductItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomepageComponent, ProductItemComponent]
})
export class HomeModule {}
