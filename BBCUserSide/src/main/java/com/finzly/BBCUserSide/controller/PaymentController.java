package com.finzly.BBCUserSide.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.finzly.BBCUserSide.entity.Payment;
import com.finzly.BBCUserSide.service.PaymentService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PaymentController
{
	@Autowired
	PaymentService paymentService;
	
	
	@GetMapping("getpaymentbycustomerid/{id}")
	public List<Payment> getPaymentByCustomerId(@PathVariable long id)
	{
		return paymentService.getPaymentByCustomerId(id);	
	}
	
//	@GetMapping("getparticularpaymentbycustomerid/{customerId}/{}")
//	public List<Payment> getParticularPaymentByCustomerId(@PathVariable long customerId, @PathVariable long customerId)
//	{
//		return paymentService.getParticularPaymentByCustomerId(customerId);	
//	}
	

}
