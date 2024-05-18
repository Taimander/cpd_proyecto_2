import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderData } from 'src/app/dto/order-data.dto';

@Component({
  selector: 'app-order-data-view',
  templateUrl: './order-data-view.component.html',
  styleUrls: ['./order-data-view.component.css']
})
export class OrderDataViewComponent {

  @Input() order_data : OrderData = new OrderData();

  @Output() edit = new EventEmitter<OrderData>();
  @Output() delete = new EventEmitter<number>();

  isOpen = false;

}
