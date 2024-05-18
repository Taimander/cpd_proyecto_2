import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerData } from 'src/app/dto/customer-data.dto';
import { OrderData, OrderItemData } from 'src/app/dto/order-data.dto';
import { ProductData } from 'src/app/dto/product-data.dto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private data: DataService,
    private router: Router
  ) {}

  cust_count = 0;
  order_count = 0;
  prod_count = 0;

  current_state = 0;

  client_add_data = new CustomerData();
  order_add_data  = new OrderData();
  product_add_data = new ProductData();

  client_modal_visible = false;
  order_modal_visible = false;
  product_modal_visible = false;

  isEditing = false;
  edit_id = 0;

  async ngOnInit() {
    await this.update();
  }

  async update() {
    this.cust_count = (await this.data.count_customers()).count;
    this.order_count = (await this.data.count_orders()).count;
    this.prod_count = (await this.data.count_products()).count;
  }

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
    this.edit_id = client.customer_id??0;
    this.isEditing = true;
    this.client_modal_visible = true;
  }

  editOrder(order: OrderData) {
    let items_copy: OrderItemData[] = [];
    order.items.forEach(item => {
      items_copy.push(Object.assign({}, item));
    });
    this.edit_id = order.order_id??0;
    this.order_add_data = Object.assign({}, order);
    this.order_add_data.items = items_copy;
    this.isEditing = true;
    this.order_modal_visible = true;
  }

  editProduct(product: ProductData) {
    this.product_add_data = Object.assign({}, product);
    this.edit_id = product.product_id??0;
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

  create_customer() {
    this.data.create_customer(this.client_add_data).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error creating customer");
    });
  }

  create_order() {
    this.data.create_order(this.order_add_data).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error creating order");
    });
  }

  create_product() {
    this.data.create_product(this.product_add_data).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error creating product");
    });
  }

  edit_customer() {
    this.data.edit_customer(this.edit_id,this.client_add_data).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error editing customer");
    });
  }

  edit_order() {
    this.data.edit_order(this.edit_id,this.order_add_data).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error editing order");
    });
  }

  edit_product() {
    this.data.edit_product(this.edit_id,this.product_add_data).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error editing product");
    });
  }

  delete_customer(id: number) {
    this.data.delete_customer(id).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error deleting customer");
    });
  }

  delete_order(id: number) {
    this.data.delete_order(id).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error deleting order");
    });
  }

  delete_product(id: number) {
    this.data.delete_product(id).then((res) => {
      console.log(res);
      if(res.message) {
        alert(res.message);
      }
      if(res.should_reload) {
        // window.location.reload();
        this.current_state = 0;
        this.ngOnInit();
      }
    }).catch(err => {
      console.log(err);
      alert("Error deleting product");
    });
  }

}
