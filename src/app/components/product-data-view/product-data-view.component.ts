import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductData } from 'src/app/dto/product-data.dto';

@Component({
  selector: 'app-product-data-view',
  templateUrl: './product-data-view.component.html',
  styleUrls: ['./product-data-view.component.css']
})
export class ProductDataViewComponent {

  @Input() productData: ProductData = new ProductData();

  @Output() edit = new EventEmitter<ProductData>();

  isOpen = false;

}
