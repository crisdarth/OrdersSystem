import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { ProductType } from '../models/productType.model';

@Component({
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {

  constructor(private router: Router, private productService: ProductService) {

  }

  product: Product = new Product();
  productTypes : ProductType[] = this.productService.getProductTypes();

  createProduct(): void {
    this.productService.createProduct(this.product)
        .subscribe( data => {
          alert("Producto creado satisfactoriamente.");
        });

  };

  setUppercaseName(name: string) {
    this.product.name = name.toUpperCase();
  }

}
