import { Component } from '@angular/core';
import { CustomerData } from 'src/app/dto/customer-data.dto';
import { OrderData, OrderItemData } from 'src/app/dto/order-data.dto';
import { ProductData } from 'src/app/dto/product-data.dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  current_state = 0;

  client_add_data = new CustomerData();
  order_add_data  = new OrderData();
  product_add_data = new ProductData();

  client_modal_visible = false;
  order_modal_visible = false;
  product_modal_visible = false;

  isEditing = false;

  openClientsModal(evt: any) {
    this.client_add_data = new CustomerData();
    this.client_modal_visible = true;
  }

  openOrdersModal(evt: any) {
    this.order_add_data = new OrderData();
    this.order_modal_visible = true;
  }

  openProductsModal(evt: any) {
    this.product_add_data = new ProductData();
    this.product_modal_visible = true;
  }

  editClient(client: CustomerData) {
    this.client_add_data = Object.assign({}, client);
    this.isEditing = true;
    this.client_modal_visible = true;
  }

  editOrder(order: OrderData) {
    let items_copy: OrderItemData[] = [];
    order.items.forEach(item => {
      items_copy.push(Object.assign({}, item));
    });
    this.order_add_data = Object.assign({}, order);
    this.order_add_data.items = items_copy;
    this.isEditing = true;
    this.order_modal_visible = true;
  }

  editProduct(product: ProductData) {
    this.product_add_data = Object.assign({}, product);
    this.isEditing = true;
    this.product_modal_visible = true;
  }

  addOrderItem() {
    this.order_add_data.items.push({
      order_id: 0,
      line_item_id: this.order_add_data.items.length + 1,
      product_id: 0,
      unit_price: 0,
      quantity: 0,
      product_name: ''
    });
  }

}
