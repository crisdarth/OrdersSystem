package com.example.demo.controller;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resources;
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
import com.example.demo.service.OrderService;
import com.example.hateoas.CustomerController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	OrderService orderService;

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
    public List<OrderDetail> getOrdersDetailsForOrder(@PathVariable("id") int id){
    	List<OrderDetail> orders = orderService.getAllOrdersForCustomer(customerId);

    	for(final Order order: orders) {
    		Link selfLink = linkTo(methodOn(CustomerController.class).getOrderById(customerId, order.getOrderId())).withSelfRel();
    		order.add(selfLink);
    	}
    	
    	Link link = linkTo(methodOn(CustomerController.class).getOrdersForCustomer(customerId)).withSelfRel();
    	Resources<Order> result = new Resources<>(orders, link);
    	return result;
    }

}
