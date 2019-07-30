import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductItemComponent } from './product-item.component';
import { CustomPipesModule } from '../../custom-pipes/custom-pipes.module';

@NgModule({
  declarations: [ProductItemComponent],
  imports: [CommonModule, RouterModule, CustomPipesModule],
  exports: [ProductItemComponent]
})
export class ProductItemModule {}
