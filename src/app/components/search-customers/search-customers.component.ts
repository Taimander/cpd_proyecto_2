import { Component } from '@angular/core';
import { CustomerData } from 'src/app/dto/customer-data.dto';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent {

  customers: CustomerData[] = [
    {
      customer_id: 1,
      cust_first_name: 'John',
      cust_last_name: 'Doe',
      credit_limit: 1000,
      cust_email: 'john@gmail.com',
      income_level: 'High',
      region: 'A'
    },
    {
      customer_id: 1,
      cust_first_name: 'John',
      cust_last_name: 'Doe',
      credit_limit: 1000,
      cust_email: 'john@gmail.com',
      income_level: 'High',
      region: 'A'
    },
    {
      customer_id: 1,
      cust_first_name: 'John',
      cust_last_name: 'Doe',
      credit_limit: 1000,
      cust_email: 'john@gmail.com',
      income_level: 'High',
      region: 'A'
    },
    {
      customer_id: 1,
      cust_first_name: 'John',
      cust_last_name: 'Doe',
      credit_limit: 1000,
      cust_email: 'john@gmail.com',
      income_level: 'High',
      region: 'A'
    }
  ];

}
