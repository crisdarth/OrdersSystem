package com.example.demo.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer>{

	void delete(Product product);
	
	List findAll();
	
	Product findOne(int id);
	
	Product save(Product product);
}
