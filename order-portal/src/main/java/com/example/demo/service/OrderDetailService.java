package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.OrderDetail;

@Service
public interface OrderDetailService {

	OrderDetail create(OrderDetail orderDetail);
	
	OrderDetail delete(int id);
	
	List<OrderDetail> findAll();
	
	OrderDetail findById(int id);
	
	OrderDetail update(OrderDetail orderDetail);
	
	List<OrderDetail> getOrdersDetailsByOrderId(int orderId);
}
