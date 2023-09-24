import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  selectedMethod: string = '';
;  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  proceedToPay() {
    if (this.selectedMethod === 'creditDebit') {
      this.router.navigate(['/paymentcredit']);
    } else if (this.selectedMethod === 'wallet') {
      this.router.navigate(['/paymentwallet']);
    } else {
      alert('Please select a payment method.');
    }
  }

}
