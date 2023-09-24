import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onCustomer(){
    this.router.navigate(['/customerdetails']);
  }

  onUnpaid(){
    this.router.navigate(['/listofinvoice']);
  }

  onPaid(){
    this.router.navigate(['/paidinvoice'])
  }

  onTransaction(){
    this.router.navigate(['/'])
  }



}
