package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Order;

@Service
public interface OrderService {

	Order create(Order order);
	
	Order delete(int id);
	
	List<Order> findAll();
	
	Order findById(int id);
	
	Order update(Order order);
}
