import { Component, OnInit } from '@angular/core';
import { CustomerInvoice } from '../customer-invoice';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listofinvoice',
  templateUrl: './listofinvoice.component.html',
  styleUrls: ['./listofinvoice.component.css']
})
export class ListofinvoiceComponent implements OnInit {

  customerinvoice: CustomerInvoice[]=[];

  constructor(private http:HttpService,private router:Router) { 
  }

  ngOnInit(): void {
    sessionStorage.setItem('customerId','1');
    this.onSumbit("1");
  }

  onSumbit(customerId:string){
    this.http.getCustomerInvoice(parseInt(customerId)).subscribe(
      (response) =>{
        this.customerinvoice = response as CustomerInvoice[];
      }
    ); 
  }

  payInvoice(){
    this.router.navigate(['/selector']);

  }

}
