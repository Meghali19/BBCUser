import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcreditComponent } from './paymentcredit.component';

describe('PaymentcreditComponent', () => {
  let component: PaymentcreditComponent;
  let fixture: ComponentFixture<PaymentcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentcreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
