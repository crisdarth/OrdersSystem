import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private router: Router, private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe( data => {
        this.products = data;
      });
	  
  };

  deleteProduct(product: Product): void {
    if(confirm("Esta seguro que desea eliminar el producto "+product.name+"?")) {
      this.productService.deleteProduct(product)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      })
    }
  };

}


