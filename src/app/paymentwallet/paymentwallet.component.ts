import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentwallet',
  templateUrl: './paymentwallet.component.html',
  styleUrls: ['./paymentwallet.component.css']
})
export class PaymentwalletComponent implements OnInit {

  payment: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Implement your payment logic here
    console.log('UPI Payment Details:', this.payment);
    // You can make an API call or process the UPI payment here
  }
}
