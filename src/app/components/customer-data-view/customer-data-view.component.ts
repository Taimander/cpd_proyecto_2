import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CustomerData } from 'src/app/dto/customer-data.dto';

@Component({
  selector: 'app-customer-data-view',
  templateUrl: './customer-data-view.component.html',
  styleUrls: ['./customer-data-view.component.css']
})
export class CustomerDataViewComponent {

  @Input() customer_data: CustomerData = new CustomerData();

  @Output() edit = new EventEmitter<CustomerData>();
  @Output() delete = new EventEmitter<number>();

  isOpen = false;

}
