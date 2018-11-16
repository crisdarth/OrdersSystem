import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OrderDetail } from '../models/orderDetail.model';
import { OrderDetailService } from './orderDetail.service';
import { IdType } from '../models/idType.model';

@Component({
  templateUrl: './add-orderDetail.component.html',
  styleUrls: ['./orderDetail.component.css']
})
export class AddOrderDetailComponent {

  orderDetail: OrderDetail = new OrderDetail();
  idTypes : IdType[] = this.orderDetailService.getIdTypes();
  private location: Location

  constructor(private router: Router, private route: ActivatedRoute, private orderDetailService: OrderDetailService) {

  }

  createOrderDetail(): void {
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
