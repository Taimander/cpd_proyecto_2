import { Injectable } from '@angular/core';
import { CustomerData } from '../dto/customer-data.dto';
import { OrderData } from '../dto/order-data.dto';
import { ProductData } from '../dto/product-data.dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  SERVER_URL = 'http://localhost:3000/';

  async find_customers(search: string) : Promise<CustomerData[]>{
    const response = await fetch(this.SERVER_URL + 'clients/find?search=' + search);
    return await response.json();
  }

  async find_orders(search: string) : Promise<OrderData[]>{
    const response = await fetch(this.SERVER_URL + 'orders/find?search=' + search);
    return await response.json();
  }

  async find_products(search: string) : Promise<ProductData[]>{
    const response = await fetch(this.SERVER_URL + 'products/find?search=' + search);
    return await response.json();
  }

  async create_customer(data: CustomerData){
    const response = await fetch(this.SERVER_URL + 'clients/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  async edit_customer(id: number, data: CustomerData){
    const response = await fetch(this.SERVER_URL + 'clients/update?cust_id=' + id, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  async delete_customer(id: number){
    const response = await fetch(this.SERVER_URL + 'clients/delete?cust_id=' + id, {
      method: 'POST'
    });
    return await response.json();
  }

  async create_order(data: OrderData){
    const response = await fetch(this.SERVER_URL + 'orders/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  async edit_order(id: number, data: OrderData){
    const response = await fetch(this.SERVER_URL + 'orders/update?order_id=' + id, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  async delete_order(id: number){
    const response = await fetch(this.SERVER_URL + 'orders/delete?order_id=' + id, {
      method: 'POST'
    });
    return await response.json();
  }

  async create_product(data: ProductData){
    const response = await fetch(this.SERVER_URL + 'products/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  async edit_product(id: number, data: ProductData){
    const response = await fetch(this.SERVER_URL + 'products/update?prod_id=' + id, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }

  async delete_product(id: number){
    const response = await fetch(this.SERVER_URL + 'products/delete?prod_id=' + id, {
      method: 'POST'
    });
    return await response.json();
  }

  async count_customers(){
    const response = await fetch(this.SERVER_URL + 'clients/count');
    return await response.json();
  }

  async count_orders(){
    const response = await fetch(this.SERVER_URL + 'orders/count');
    return await response.json();
  }

  async count_products(){
    const response = await fetch(this.SERVER_URL + 'products/count');
    return await response.json();
  }

}
