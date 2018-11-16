package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Order;
import com.example.demo.repo.OrderRepository;

@Service
public class OrderServiceImplementation implements OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Override
	public Order create(Order order) {
		return repository.save(order);
	}
	
	@Override
	public Order delete(int id) {
		Order order = repository.findOne(id);
		
		if(order !=null) {
			repository.delete(order);			
		}
		return order;
	}

	@Override
	public List findAll(){
		return repository.findAll();
	}
	
	@Override
	public Order findById(int id) {
		return repository.findOne(id);
	}
	
	@Override
	public Order update(Order order) {
		return repository.save(order);
	}
}
