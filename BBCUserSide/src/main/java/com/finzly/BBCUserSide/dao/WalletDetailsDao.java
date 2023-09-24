package com.finzly.BBCUserSide.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finzly.BBCUserSide.entity.WalletDetails;



@Repository
public class WalletDetailsDao
{
	@Autowired
    SessionFactory sf;


	public WalletDetails walletCheck(String upiNumber)
	{
		Session session = sf.openSession();
		return session.get(WalletDetails.class, upiNumber);
	
	}

}
