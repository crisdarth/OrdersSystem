import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderDetail } from '../models/orderDetail.model';
import { OrderDetailService } from './orderDetail.service';

@Component({
  selector: 'app-orderDetail',
  templateUrl: './orderDetail.component.html',
  styles: []
})
export class OrderDetailComponent implements OnInit {

  orderDetails: OrderDetail[];

  constructor(private router: Router, private orderDetailService: OrderDetailService) {

  }

  ngOnInit() {
    this.orderDetailService.getOrderDetails()
      .subscribe( data => {
        this.orderDetails = data;
      });
  };

  deleteOrderDetail(orderDetail: OrderDetail): void {
    if(confirm("Esta seguro que desea eliminar la orden número "+orderDetail.id+"?")) {
      this.orderDetailService.deleteOrderDetail(orderDetail)
      .subscribe( data => {
        this.orderDetails = this.orderDetails.filter(u => u !== orderDetail);
      })
    }
    
  };

}


