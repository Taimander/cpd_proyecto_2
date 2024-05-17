import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { SearchCustomersComponent } from './components/search-customers/search-customers.component';
import { CustomerDataViewComponent } from './components/customer-data-view/customer-data-view.component';
import { OrderDataViewComponent } from './components/order-data-view/order-data-view.component';
import { ProductDataViewComponent } from './components/product-data-view/product-data-view.component';
import { SearchOrdersComponent } from './components/search-orders/search-orders.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeCardComponent,
    SearchCustomersComponent,
    CustomerDataViewComponent,
    OrderDataViewComponent,
    ProductDataViewComponent,
    SearchOrdersComponent,
    SearchProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
