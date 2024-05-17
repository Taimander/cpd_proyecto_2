import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDataViewComponent } from './product-data-view.component';

describe('ProductDataViewComponent', () => {
  let component: ProductDataViewComponent;
  let fixture: ComponentFixture<ProductDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
