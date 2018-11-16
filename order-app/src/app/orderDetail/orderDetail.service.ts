import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { OrderDetail } from '../models/orderDetail.model';
import { IdType } from '../models/idType.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderDetailService {

  constructor(private http:HttpClient) {}

  private orderDetailsUrl = 'http://localhost:8080/order-portal/orderDetails';

  idTypes : IdType[] = [
    {id:"CEDULA DE CIUDADANIA",name:"CEDULA DE CIUDADANIA"},
    {id:"CEDULA DE EXTRANJERIA",name:"CEDULA DE EXTRANJERIA"},
    {id:"NIT",name:"NIT"}
  ];

  public getIdTypes(){
    return this.idTypes;
  }

  public getOrderDetails() {
    return this.http.get<OrderDetail[]>(this.orderDetailsUrl);
  }

  public deleteOrderDetail(orderDetails) {
    return this.http.delete(this.orderDetailsUrl + "/"+ orderDetails.id);
  }

  public createOrderDetail(orderDetails) {
    return this.http.post<OrderDetail>(this.orderDetailsUrl, orderDetails);
  }

}
