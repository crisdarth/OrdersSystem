import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { OrderDetail } from '../models/orderDetail.model';
import { OrderDetailService } from './orderDetail.service';

@Component({
  selector: 'app-orderDetail',
  templateUrl: './orderDetail.component.html',
  styles: []
})
export class OrderDetailComponent implements OnInit {

  orderDetails: OrderDetail[];

  constructor(private router: Router, private route: ActivatedRoute, private orderDetailService: OrderDetailService) {

  }

  ngOnInit() {
    const orderId = +this.route.snapshot.paramMap.get('id');
    this.orderDetailService.getOrderDetails(orderId)
      .subscribe( data => {
        this.orderDetails = data['_embedded']['orderDetails'];;
      });
  };

  /*deleteOrderDetail(orderDetail: OrderDetail): void {
    if(confirm("Esta seguro que desea eliminar la orden número "+orderDetail.id+"?")) {
      this.orderDetailService.deleteOrderDetail(orderDetail)
      .subscribe( data => {
        this.orderDetails = this.orderDetails.filter(u => u !== orderDetail);
      })
    }
    
  };*/

}


