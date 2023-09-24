import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidinvoiceComponent } from './paidinvoice.component';

describe('PaidinvoiceComponent', () => {
  let component: PaidinvoiceComponent;
  let fixture: ComponentFixture<PaidinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
