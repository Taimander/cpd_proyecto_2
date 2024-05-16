import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-data-view',
  templateUrl: './customer-data-view.component.html',
  styleUrls: ['./customer-data-view.component.css']
})
export class CustomerDataViewComponent {

  @Input() first_name: string = '';
  @Input() last_name: string = '';
  @Input() credit_limit: number = 0;

  @Input() client_number: number = 0;
  @Input() email_address: string = '';
  @Input() income_level: string = '';
  @Input() region: string = '';

  isOpen = false;

}
