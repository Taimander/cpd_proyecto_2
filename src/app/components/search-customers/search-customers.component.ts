import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomerData } from 'src/app/dto/customer-data.dto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  constructor(
    private data: DataService
  ) {}

  @Output() modal_view = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<CustomerData>();
  @Output() delete = new EventEmitter<number>();

  search: string = "";

  customers: CustomerData[] = [];

  async ngOnInit() {
    await this.updateData();
  }

  async updateData() {
    this.customers = await this.data.find_customers(this.search);
  }

  editFn(data: CustomerData) {
    this.edit.emit(data);
  }

}
