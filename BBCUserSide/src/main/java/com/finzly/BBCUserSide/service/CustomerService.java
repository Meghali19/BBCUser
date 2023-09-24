package com.finzly.BBCUserSide.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finzly.BBCUserSide.dao.CustomerDao;
import com.finzly.BBCUserSide.entity.Customer;
import com.finzly.BBCUserSide.entity.CustomerInvoice;


@Service
public class CustomerService {

	@Autowired
	private CustomerDao customerDao;

	public Customer getCustomerByCusomterId(long id) {
		return customerDao.getCustomerByCusomterId(id);
	}

	public List<CustomerInvoice> getAllPaidBills(long id) {
	
		return customerDao.getAllPaidBills();
	}

	public List<CustomerInvoice> getAllUnPaidBills(long id) {
		List<CustomerInvoice> list = customerDao.getAllPaidBills();
		List<CustomerInvoice>al = new ArrayList<>();
		for(CustomerInvoice ci:list) {
			Customer c = ci.getCustomer();
			if(c.getCustomerId()==id && ci.getPaymentStatus()=="pending") {
				al.add(ci);
			}
		}
		return al;	}
	
	
	

}
