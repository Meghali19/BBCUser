import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor() { }
  generateRandomOTP():string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
