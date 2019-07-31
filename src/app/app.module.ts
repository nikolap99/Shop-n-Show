import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeModule } from './containers/homepage/home.module';
import { ProductModule } from './containers/productpage/product.module';
import { CartModule } from './containers/cartpage/cart.module';
import { CartBoxComponent } from './components/cart-box/cart-box.component';
import { NotFoundModule } from './containers/not-found/not-found.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CartBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    HomeModule,
    ProductModule,
    NotFoundModule,
    CartModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
