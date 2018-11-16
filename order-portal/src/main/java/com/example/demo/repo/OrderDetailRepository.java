package com.example.demo.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Order;
import com.example.demo.model.OrderDetail;

public interface OrderDetailRepository extends CrudRepository<OrderDetail, Integer>{

	void delete(OrderDetail orderDetail);
	
	List findAll();
	
	OrderDetail findOne(int id);
	
	OrderDetail save(OrderDetail orderDetail);
	
	List<OrderDetail> findByOrder(@Param("order") Order order);
	
}
