package com.finzly.BBCUserSide.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.BBCUserSide.dao.PaymentDao;
import com.finzly.BBCUserSide.entity.Payment;

@Service
public class PaymentService
{
	@Autowired
	PaymentDao paymentDao;

	public List<Payment> getPaymentByCustomerId(long id)
	{
		return paymentDao.getPaymentByCustomerId(id);	
	}

}
