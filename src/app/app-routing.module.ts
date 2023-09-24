import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { ListofinvoiceComponent } from './listofinvoice/listofinvoice.component';
import { PaidinvoiceComponent } from './paidinvoice/paidinvoice.component';
import { PaymentcreditComponent } from './paymentcredit/paymentcredit.component';
import { PaymentwalletComponent } from './paymentwallet/paymentwallet.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { LoginComponent } from './login/login.component';
import { SelectionComponent } from './selection/selection.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
{path:'home', component:DashboardComponent},
{path:'customerdetails',component:CustomerdetailComponent},
{path:'listofinvoice',component:ListofinvoiceComponent},
{path :'paidinvoice',component:PaidinvoiceComponent},
{path:'paymentcredit',component:PaymentcreditComponent},
{path:'paymentwallet',component:PaymentwalletComponent},
{path:'paymentdetails',component:PaymentdetailsComponent},
{path:'selector',component:SelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
