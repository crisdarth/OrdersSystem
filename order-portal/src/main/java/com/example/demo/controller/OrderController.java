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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.model.OrderDetail;
import com.example.demo.service.OrderDetailService;
import com.example.demo.service.OrderService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	OrderService orderService;
	
	@Autowired
	OrderDetailService orderDetailService;

	@PostMapping
	public Order create(@RequestBody Order order) {
		return orderService.create(order);
	}

	
	@GetMapping(path = {"/{id}"})
	public Order findOne(@PathVariable("id") int id) {
		return orderService.findById(id);
	}

	@PutMapping
	public Order update(@RequestBody Order order) {
		return orderService.update(order);
	}

	@DeleteMapping(path = {"/{id}"})
	public  Order delete(@PathVariable("id") Integer id) {
		return orderService.delete(id);
	}
	
	@GetMapping
	public List findAll() {
		return orderService.findAll();
	}
	
	@GetMapping(path = {"/{id}/ordersDetails"})
    public List<OrderDetail> getOrdersDetailsByOrderId(@PathVariable("id") int id){
		return orderDetailService.getOrdersDetailsByOrderId(id);
    }

}
