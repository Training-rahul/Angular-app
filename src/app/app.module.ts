import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { PracticeComponent } from './practice-folder/practice/practice.component';
import { HomeComponent } from './practice-folder/Browser-router/home/home.component';
import { AboutComponent } from './practice-folder/Browser-router/about/about.component';
import { ContactComponent } from './practice-folder/Browser-router/contact/contact.component';
import { ErrorComponent } from './practice-folder/Browser-router/error/error.component';
import { RoutingHtmlComponent } from './practice-folder/Browser-router/routing-html/routing-html.component';
import { NgForComponent } from './practice-folder/ng-for/ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    PracticeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    RoutingHtmlComponent,
    NgForComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
