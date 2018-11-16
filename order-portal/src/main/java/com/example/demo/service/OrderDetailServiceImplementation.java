package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.OrderDetail;
import com.example.demo.repo.OrderDetailRepository;

@Service
public class OrderDetailServiceImplementation implements OrderDetailService {
	
	@Autowired
	private OrderDetailRepository repository;
	
	@Override
	public OrderDetail create(OrderDetail orderDetail) {
		return repository.save(orderDetail);
	}
	
	@Override
	public OrderDetail delete(int id) {
		OrderDetail order = repository.findOne(id);
		
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
	public OrderDetail findById(int id) {
		return repository.findOne(id);
	}
	
	@Override
	public OrderDetail update(OrderDetail orderDetail) {
		return repository.save(orderDetail);
	}
	
	@Override
	public List<OrderDetail> getOrdersDetailsByOrderId(int orderId){
		return null;
	}
}
