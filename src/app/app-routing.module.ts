import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './containers/homepage/homepage.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { ProductpageComponent } from './containers/productpage/productpage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'product/:id', component: ProductpageComponent },
  /*{ path: 'cart', component: CartComponent },*/
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
