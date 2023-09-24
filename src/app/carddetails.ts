export class Carddetails {
  private cardNumber: number;
  private CVVNumber: number;
  private expiryDate: Date;
  private balance: number;

  constructor(cardNumber: number, CVVNumber: number, expiryDate: Date, balance: number) {
    this.cardNumber = cardNumber;
    this.CVVNumber = CVVNumber;
    this.expiryDate = expiryDate;
    this.balance = balance;
  }
  
}




  