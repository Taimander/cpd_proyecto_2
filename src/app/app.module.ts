import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { CustomersComponent } from './routes/customers/customers.component';
import { OrdersComponent } from './routes/orders/orders.component';
import { ProductsComponent } from './routes/products/products.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { SearchCustomersComponent } from './components/search-customers/search-customers.component';
import { CustomerDataViewComponent } from './components/customer-data-view/customer-data-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    OrdersComponent,
    ProductsComponent,
    HomeCardComponent,
    SearchCustomersComponent,
    CustomerDataViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
