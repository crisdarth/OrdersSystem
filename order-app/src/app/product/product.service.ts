import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../models/product.model';
import { ProductType } from '../models/productType.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) {}

  product: Product = new Product();
  productTypes : ProductType[] = [
    {id:"PANTALON FORMAL",name:"PANTALON FORMAL"},
    {id:"CAMISA FORMAL",name:"CAMISA FORMAL"},
    {id:"CHAQUETA",name:"CHAQUETA"}
  ];

  public getProductTypes(){
    return this.productTypes;
  }

  private productUrl = 'http://localhost:8080/order-portal/products';

  public getProducts() {
    return this.http.get<Product[]>(this.productUrl);
  }

  public deleteProduct(product) {
    return this.http.delete(this.productUrl + "/"+ product.id);
  }

  public createProduct(product) {
    return this.http.post<Product>(this.productUrl, product);
  }
  
  public updateProduct(product) {
    return this.http.put<Product>(this.productUrl, product);
  }

  public getProductById(id) {
    return this.http.get<Product>(this.productUrl+"/"+id);
  }

}
