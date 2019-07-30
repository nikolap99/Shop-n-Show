import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductItemComponent } from './product-item.component';
import { ShortDescPipe } from '../../short-desc.pipe';

@NgModule({
  declarations: [ProductItemComponent, ShortDescPipe],
  imports: [CommonModule, RouterModule],
  exports: [ProductItemComponent]
})
export class ProductItemModule {}
