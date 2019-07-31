import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found.component';
import { BackButtonModule } from '../../components/back-button/back-button.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, BackButtonModule],
  exports: [NotFoundComponent]
})
export class NotFoundModule {}
