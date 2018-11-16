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

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private orderDetailService: OrderDetailService,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("se hace el id "+id);
    this.orderService.getOrderById(id)
      .subscribe( data => {
        this.order = data;
        console.log("se actualzia la orden con el id "+this.order.id);
      });
    this.productService.getProducts()
      .subscribe( data => {
        this.products = data['_embedded']['products'];
      });
  };

  /*createOrderDetail(): void {
    this.orderDetailService.createOrderDetail(this.orderDetail)
        .subscribe( data => {
          alert("El producto se ha agregado satisfactoriamente.");
        });

  };*/

  goBack(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl('/order/'+id);
  }

}
