import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { ProductpageComponent } from './containers/productpage/productpage.component';
import { CartpageComponent } from './containers/cartpage/cartpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomepageComponent,
    ProductpageComponent,
    CartpageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
