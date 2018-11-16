package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication
@ComponentScan(basePackages = "com.example.demo")
@EntityScan
@EnableAutoConfiguration
@EnableJpaRepositories(basePackages = "com.example.demo")
public class OrderPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderPortalApplication.class, args);
	}
}
