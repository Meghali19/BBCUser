import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListofinvoiceComponent } from './listofinvoice/listofinvoice.component';
import { PaymentcreditComponent } from './paymentcredit/paymentcredit.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PaidinvoiceComponent } from './paidinvoice/paidinvoice.component';
import { PaymentwalletComponent } from './paymentwallet/paymentwallet.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectionComponent } from './selection/selection.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListofinvoiceComponent,
    PaymentcreditComponent,
    CustomerdetailComponent,
    PaymentdetailsComponent,
    PaidinvoiceComponent,
    PaymentwalletComponent,
    LoginComponent,
    SelectionComponent,
    
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(), 
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
