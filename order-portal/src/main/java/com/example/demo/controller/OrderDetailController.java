package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.model.OrderDetail;
import com.example.demo.model.Product;
import com.example.demo.service.OrderDetailService;
import com.example.demo.service.OrderService;
import com.example.demo.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/orderDetails")
public class OrderDetailController {

	@Autowired
	OrderDetailService orderDetailService;

	@PostMapping
	public OrderDetail create(@RequestBody OrderDetail orderDetail) {
		return orderDetailService.create(orderDetail);
	}

	
	@GetMapping(path = {"/{id}"})
	public OrderDetail findOne(@PathVariable("id") int id) {
		return orderDetailService.findById(id);
	}

	@PutMapping
	public OrderDetail update(@RequestBody OrderDetail orderDetail) {
		return orderDetailService.update(orderDetail);
	}

	@DeleteMapping(path = {"/{id}"})
	public  OrderDetail delete(@PathVariable("id") Integer id) {
		return orderDetailService.delete(id);
	}
	
	@GetMapping
	public List findAll() {
		return orderDetailService.findAll();
	}

}
