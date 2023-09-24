export class Customer {
    customerId: number;
    customerName: string;
    email: string;
    phoneNumber: string;
  
    constructor(
      customerId: number,
      name: string,
      email: string,
      phoneNumber: string
    
    ) {
      this.customerId = customerId;
      this.customerName = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
    }
  }