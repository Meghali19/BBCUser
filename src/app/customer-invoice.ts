import { Customer } from "./customer";
export class CustomerInvoice {
    customerInvoiceId: number;
    customerUnitConsumption: number;
    startDate: string; // Assuming dates will be in string format
    dueDate: string; // Assuming dates will be in string format
    customer: Customer;
    paymentMethod: string;
    paymentStatus: string;
    price: number;
  
    constructor(
      customerInvoiceId: number,
      customerUnitConsumption: number,
      startDate: string,
      dueDate: string,
      customer: Customer,
      paymentMethod: string,
      paymentStatus: string,
      price: number
    ) {
      this.customerInvoiceId = customerInvoiceId;
      this.customerUnitConsumption = customerUnitConsumption;
      this.startDate = startDate;
      this.dueDate = dueDate;
      this.customer = customer;
      this.paymentMethod = paymentMethod;
      this.paymentStatus = paymentStatus;
      this.price = price;
    }
  }
  
  
