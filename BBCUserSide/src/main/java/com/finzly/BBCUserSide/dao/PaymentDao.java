package com.finzly.BBCUserSide.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.finzly.BBCUserSide.entity.Payment;

@Repository
public class PaymentDao
{
	@Autowired
	SessionFactory sf;
	
	
    public String addPayment(Payment payment)
    {
    	Session session = sf.openSession();
    	session.save(payment);
    	session.beginTransaction().commit();
    	return "Payment is successful";
    }


	public List<Payment> getPaymentByCustomerId(long id)
	{
		Session session = sf.openSession();
		Criteria criteria = session.createCriteria(Payment.class);
		criteria.add(Restrictions.eq("customerId", id));
		return criteria.list();		
	}
}
