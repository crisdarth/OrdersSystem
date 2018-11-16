package com.example.demo.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.example.demo.model.Product;

public interface ProductRepository extends CrudRepository<Product, Integer>{

	void delete(Product product);
	
	List findAll();
	
	Product findOne(int id);
	
	Product save(Product product);
}
