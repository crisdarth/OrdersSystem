package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Product;

@Service
public interface ProductService {

	Product create(Product product);

	Product delete(int id);

	List<Product> findAll();

	Product findById(int id);

	Product update(Product product);
}
