package com.finzly.BBCUserSide.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finzly.BBCUserSide.entity.Customer;
import com.finzly.BBCUserSide.entity.CustomerInvoice;
import com.finzly.BBCUserSide.service.CustomerService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("user")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@GetMapping("getcustomerbycustomerid/{id}")
	public Customer getCustomerByCusomterId(@PathVariable long id) {
		return customerService.getCustomerByCusomterId(id);
	}
	@GetMapping("getAllPaidBills")
	public List<CustomerInvoice> getAllPaidBills(long id) {
		return customerService.getAllPaidBills(id);
	}
	@GetMapping("getAllUnPaidBills")
	public List<CustomerInvoice> getAllUnPaidBills(long id) {
		return customerService.getAllUnPaidBills(id);
	}
}
