package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repo.ProductRepository;

@Service
public class ProductServiceImplementation implements ProductService {
	
	@Autowired
	private ProductRepository repository;
	
	@Override
	public Product create(Product product) {
		return repository.save(product);
	}
	
	@Override
	public Product delete(int id) {
		Product product = repository.findOne(id);
		
		if(product !=null) {
			repository.delete(product);			
		}
		return product;
	}

	@Override
	public List findAll(){
		return repository.findAll();
	}
	
	@Override
	public Product findById(int id) {
		return repository.findOne(id);
	}
	
	@Override
	public Product update(Product product) {
		return repository.save(product);
	}
}
