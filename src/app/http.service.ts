import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private getListofCustomerInvoiceApi = `http://localhost:9497/customerinvoice/getcustomerinvoicebycustomerid`;
  
  private  getEmployeeNumberById= `http://localhost:9497/user/getcustomerbycustomerid`;
 
  constructor(private http:HttpClient) { }

  getCustomerInvoice(customerId:number){
    const options = {
      responseType: 'json' as 'json',
    };
    console.log(customerId);
    return this.http.get(`${this.getListofCustomerInvoiceApi}/${customerId}`,options);
  }

 
  getEmployee(customerId:number){
    const options = {
      responseType: 'json' as 'json',
    };
    return this.http.get<string>(`${this.getEmployeeNumberById}/${customerId}`,options);
  }

  updatePaymetn(customerId:number){
    const options = {

    };
    return 
  }


}
