import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

import { ShortDescPipe } from '../../short-desc.pipe';

@NgModule({
  declarations: [
    HomepageComponent,
    ProductItemComponent,
    ProductListComponent,
    ShortDescPipe
  ],
  imports: [CommonModule, RouterModule],
  exports: [HomepageComponent, ProductItemComponent, ProductListComponent]
})
export class HomeModule {}
