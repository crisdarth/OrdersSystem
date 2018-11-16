package com.example.demo.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Order;
import com.example.demo.model.OrderDetail;

public interface OrderRepository extends CrudRepository<Order, Integer>{

	void delete(Order order);
	
	List findAll();
	
	Order findOne(int id);
	
	Order save(Order order);
	
}
