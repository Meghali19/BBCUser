package com.finzly.BBCUserSide.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class WalletDetails
{
	@Id
	private String upiNumber;
	private String pin;
	
	public WalletDetails() {
		
	}

	public WalletDetails(String upiNumber, String pin) {
		super();
		this.upiNumber = upiNumber;
		this.pin = pin;
	}

	public String getUpiNumber() {
		return upiNumber;
	}

	public void setUpiNumber(String upiNumber) {
		this.upiNumber = upiNumber;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	@Override
	public String toString() {
		return "WalletDetails [upiNumber=" + upiNumber + ", pin=" + pin + "]";
	}

	
}
