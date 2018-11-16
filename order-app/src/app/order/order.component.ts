import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from '../models/order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  orders: Order[];

  constructor(private router: Router, private orderService: OrderService) {

  }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe( data => {
        this.orders = data;
      });
  };

  deleteOrder(order: Order): void {
    if(confirm("Esta seguro que desea eliminar la orden número "+order.id+"?")) {
      this.orderService.deleteOrder(order)
      .subscribe( data => {
        this.orders = this.orders.filter(u => u !== order);
      })
    }
    
  };

}


