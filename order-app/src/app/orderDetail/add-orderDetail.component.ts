import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OrderDetail } from '../models/orderDetail.model';
import { OrderDetailService } from './orderDetail.service';
import { IdType } from '../models/idType.model';
import { Product } from '../models/product.model';
import { ProductService } from '../product/product.service';
import { Order } from '../models/order.model';
import { OrderService } from '../order/order.service';

@Component({
  templateUrl: './add-orderDetail.component.html',
  styleUrls: ['./orderDetail.component.css']
})
export class AddOrderDetailComponent {

  orderDetail: OrderDetail = new OrderDetail();
  private location: Location;
  products: Product[];
  order: Order;
  productId : number;
  producto : Product;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private orderDetailService: OrderDetailService,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id)
      .subscribe( data => {
        this.order = data;
      });
    this.productService.getProducts()
      .subscribe( data => {
        this.products = data['_embedded']['products'];
      });
  };

  createOrderDetail(): void {
    this.orderDetail.order = this.order;
    console.log("esta es la orden del detalle "+this.orderDetail.order);
    console.log("este es el ide del producto"+this.productId);
    this.productService.getProductById(this.productId)
      .subscribe( data => {
        this.producto = data;
        console.log("la data es"+data);  
      });
      console.log(this.producto);
      this.orderDetail.product = this.producto;
    this.orderDetailService.createOrderDetail(this.orderDetail)
        .subscribe( data => {
          alert("El producto se ha agregado satisfactoriamente.");
        });

  };

  goBack(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl('/order/'+id);
  }

}
