import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';

import { HomeModule } from './containers/homepage/home.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HomeModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
