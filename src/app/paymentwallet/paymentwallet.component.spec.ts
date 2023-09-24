import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentwalletComponent } from './paymentwallet.component';

describe('PaymentwalletComponent', () => {
  let component: PaymentwalletComponent;
  let fixture: ComponentFixture<PaymentwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentwalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
