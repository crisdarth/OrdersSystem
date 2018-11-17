import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { OrderDetail } from '../models/orderDetail.model';
import { IdType } from '../models/idType.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderDetailService {

  private orderDetailsUrl = 'http://localhost:8080/order-portal/orders';
  private orderDetailsUrlCreate = 'http://localhost:8080/order-portal/orderDetails';

  constructor(private http:HttpClient) {}

  public getOrderDetails(orderId) {
    return this.http.get<OrderDetail[]>(this.orderDetailsUrl+"/"+orderId+"/orderDetails/?projection=customOrderDetail").pipe();
  }

  public deleteOrderDetail(orderDetail) {
    return this.http.delete(this.orderDetailsUrlCreate + "/"+ orderDetail.id);
  }

  public createOrderDetail(orderDetail) {
    console.log(this.orderDetailsUrlCreate);
    return this.http.post<OrderDetail>(this.orderDetailsUrlCreate, orderDetail);
  }

}
