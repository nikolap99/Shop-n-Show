import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortDescPipe } from './short-desc.pipe';

@NgModule({
  declarations: [ShortDescPipe],
  imports: [CommonModule],
  exports: [ShortDescPipe]
})
export class CustomPipesModule {}
