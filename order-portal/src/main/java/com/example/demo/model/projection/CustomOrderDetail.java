package com.example.demo.model.projection;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import com.example.demo.model.OrderDetail;

@Projection(name = "customOrderDetail", types = { OrderDetail.class }) 
public interface CustomOrderDetail {
	
	@Value("#{target.id}")
	long getId();
	
	@Value("#{target.getProduct().getId()}")
    int getProductId();
	
	@Value("#{target.getOrder().getId()}")
    int getOrderId();
	
	
	@Value("#{target.getProduct().getName()}")
    String getProductName();
	
	@Value("#{target.getProduct().getUnitPrice()}")
    double getProductUnitPrice();
	
	int getQuantity();

	double getSubtotal();
}
