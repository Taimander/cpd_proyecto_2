import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDataViewComponent } from './order-data-view.component';

describe('OrderDataViewComponent', () => {
  let component: OrderDataViewComponent;
  let fixture: ComponentFixture<OrderDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
