import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Route, Router } from '@angular/router';
import { OtpService } from '../otp.service';
import { Customer } from '../customer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employeeId!:number;
  isCheckButtonHidden:boolean = true;
  otpNumber:string="";
  sentMessage:string="";
  otpMessage:string= "";
  currentCustomer!:Customer;
  customerNumber:String="";


  constructor(private service:HttpService,private router:Router,private otpservice:OtpService) { }

  ngOnInit(): void {
  }

  onGenerateOTP(customerId:string){
    if(!customerId){
      alert("Enter your customer ID");
    }else{
      sessionStorage.setItem("customerID",customerId);
      this.otpNumber = this.otpservice.generateRandomOTP();
      this.otpMessage= `OTP is ${this.otpNumber}`;
      this.service.getEmployee(Number.parseInt(customerId)).subscribe(
        (response)=>{
          this.currentCustomer= response as unknown as Customer;
          sessionStorage.setItem("customerDetail",JSON.stringify(this.currentCustomer));
          this.customerNumber = this.currentCustomer.phoneNumber;
          this.sentMessage = `OTP sent ${this.customerNumber} `;
        }
      );
      this.isCheckButtonHidden=false;
    }
  }

  checkOTP(otp:string){
    if(otp==this.otpNumber.toString()){
      this.router.navigate(['/home']);
    }else{
      alert("Enter valid OTP!!");
    }
    
  }

}
