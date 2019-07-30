import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductItemModule } from '../../components/product-item/product-item.module';

import { HomepageComponent } from './homepage.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@NgModule({
  declarations: [HomepageComponent, ProductListComponent],
  imports: [CommonModule, RouterModule, ProductItemModule],
  exports: [HomepageComponent, ProductListComponent]
})
export class HomeModule {}
