import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductData } from 'src/app/dto/product-data.dto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {

  constructor(
    private data: DataService
  ) {}

  @Output() modal_view = new EventEmitter<boolean>();

  @Output() edit = new EventEmitter<ProductData>();
  @Output() delete = new EventEmitter<number>();

  products: ProductData[] = [];

  visible = false;

  search: string = "";

  async ngOnInit() {
    await this.updateData();
  }

  async updateData() {
    this.products = await this.data.find_products(this.search);
  }

}
