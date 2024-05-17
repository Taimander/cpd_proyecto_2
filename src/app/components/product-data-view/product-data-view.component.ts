import { Component, Input } from '@angular/core';
import { ProductData } from 'src/app/dto/product-data.dto';

@Component({
  selector: 'app-product-data-view',
  templateUrl: './product-data-view.component.html',
  styleUrls: ['./product-data-view.component.css']
})
export class ProductDataViewComponent {

  @Input() productData: ProductData = new ProductData();

  isOpen = false;

}
