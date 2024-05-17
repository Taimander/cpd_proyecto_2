import { Component, Input } from '@angular/core';
import { ProductData } from 'src/app/dto/product-data.dto';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {

  @Input() products: ProductData[] = [
    {
      product_id: 1,
      product_name: 'Product 1',
      product_description: 'Description 1',
      category_id: 1,
      weight_class: 1,
      warranty_period: '1 year',
      supplier_id: 1,
      product_status: 'Active',
      list_price: 10,
      min_price: 5,
      catalog_url: 'http://example.com/catalog1'
    },
    {
      product_id: 2,
      product_name: 'Product 2',
      product_description: 'Description 2',
      category_id: 2,
      weight_class: 2,
      warranty_period: '2 years',
      supplier_id: 2,
      product_status: 'Inactive',
      list_price: 20,
      min_price: 10,
      catalog_url: 'http://example.com/catalog2'
    }
  ];

}
