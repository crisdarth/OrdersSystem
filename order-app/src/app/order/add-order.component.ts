import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../models/order.model';
import { OrderService } from './order.service';
import { IdType } from '../models/idType.model';

@Component({
  templateUrl: './add-order.component.html',
  styleUrls: ['./order.component.css']
})
export class AddOrderComponent {

  order: Order = new Order();
  idTypes : IdType[] = this.orderService.getIdTypes();
  isUnchanged = false;

  constructor(private router: Router, private orderService: OrderService) {

  }

  createOrder(): void {
    this.orderService.createOrder(this.order)
        .subscribe( data => {this.order = data
          alert("Pedido creado satisfactoriamente.");
        });
        this.isUnchanged = true;  
        
  };

  setUppercaseName(name: string) {
    this.order.customerName = name.toUpperCase();
  };

  addOrderDetailBtnClick= function () {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl('/order/'+id+'/addOrderDetail');
  };

}
