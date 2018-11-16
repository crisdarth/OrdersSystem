import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Order } from '../models/order.model';
import { OrderService } from './order.service';
import { IdType } from '../models/idType.model';

@Component({
  templateUrl: './edit-order.component.html',
  styleUrls: ['./order.component.css']
})
export class EditOrderComponent implements OnInit {
  @Input() order: Order;
  idTypes : IdType[] = this.orderService.getIdTypes();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id)
      .subscribe(order => this.order = order);
  }

  goBack(): void {
    this.location.back();
  }

  saveOrder(): void {
    this.orderService.updateOrder(this.order)
      .subscribe(() => this.router.navigateByUrl('/ordersList'));
  }

  setUppercaseName(customerName: string) {
    this.order.customerName = customerName.toUpperCase();
  }

  addOrderDetailBtnClick= function () {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl('/order/'+id+'/addOrderDetail');
  }
}