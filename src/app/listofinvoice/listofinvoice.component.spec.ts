import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofinvoiceComponent } from './listofinvoice.component';

describe('ListofinvoiceComponent', () => {
  let component: ListofinvoiceComponent;
  let fixture: ComponentFixture<ListofinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofinvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
