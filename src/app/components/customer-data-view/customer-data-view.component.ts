import { Component, Input } from '@angular/core';
import { CustomerData } from 'src/app/dto/customer-data.dto';

@Component({
  selector: 'app-customer-data-view',
  templateUrl: './customer-data-view.component.html',
  styleUrls: ['./customer-data-view.component.css']
})
export class CustomerDataViewComponent {

  @Input() customer_data: CustomerData = new CustomerData();

  isOpen = false;

}
