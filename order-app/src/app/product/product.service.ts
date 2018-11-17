import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../models/product.model';
import { ProductType } from '../models/productType.model';
import { Observable } from '../../../node_modules/rxjs';
import { tap } from 'rxjs/operators';
import { TagPlaceholder } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) {}

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
    return this.http.get<Product[]>(this.productUrl).pipe();
  }

  public deleteProduct(product) {
    return this.http.delete(this.productUrl + "/"+ product.id);
  }

  public createProduct(product) {
    return this.http.post<Product>(this.productUrl, product);
  }
  
  public updateProduct(product) {
    return this.http.put<Product>(this.productUrl + "/"+ product.id, product);
  }

  public getProductById(id) {
    console.log("esta es la url del producto "+this.productUrl+"/"+id);
    return this.http.get<Product>(this.productUrl+"/"+id).pipe();
  }

}
