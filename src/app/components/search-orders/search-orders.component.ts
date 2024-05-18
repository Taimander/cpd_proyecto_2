import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderData } from 'src/app/dto/order-data.dto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-orders',
  templateUrl: './search-orders.component.html',
  styleUrls: ['./search-orders.component.css']
})
export class SearchOrdersComponent implements OnInit {

  constructor(
    private data: DataService
  ) {}

  @Output() modal_view = new EventEmitter<boolean>();

  @Output() edit = new EventEmitter<OrderData>();
  @Output() delete = new EventEmitter<number>();

  orders: OrderData[] = [];

  search: string = "";

  async ngOnInit() {
    await this.updateData();
  }

  async updateData() {
    this.orders = await this.data.find_orders(this.search);
  }


}
