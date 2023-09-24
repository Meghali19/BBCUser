package com.finzly.BBCUserSide.utility;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.finzly.BBCUserSide.dao.CardDetailsDao;
import com.finzly.BBCUserSide.dao.WalletDetailsDao;
import com.finzly.BBCUserSide.entity.WalletDetails;

@Component
public class ValidWalletDetails
{

	@Autowired
	WalletDetailsDao walletDetailsDao;
	
	public String validWalletDetails(WalletDetails walletDetails)
	{
		String upiNumber = walletDetails.getUpiNumber();
		String pin = walletDetails.getPin();
		
		
		WalletDetails existingWalletDetail = walletDetailsDao.walletCheck(upiNumber);
		
		if(existingWalletDetail==null)
		{
			return "Not Valid UPI Number";
		}
		else if(!existingWalletDetail.getPin().equals(pin))
		{
			return "Pin is not Correct Please enter correct pin";
		}
		
		
		return "Valid user";
		
	}
}
