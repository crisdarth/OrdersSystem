import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { ProductType } from '../models/productType.model';

@Component({
  templateUrl: './edit-product.component.html',
  styleUrls: ['./product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input() product: Product;
  productTypes : ProductType[] = this.productService.getProductTypes();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  saveProduct(): void {
    this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }

  setUppercaseName(name: string) {
    this.product.name = name.toUpperCase();
  }
}