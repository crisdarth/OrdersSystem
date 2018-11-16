import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Order } from '../models/order.model';
import { IdType } from '../models/idType.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrderService {

  constructor(private http:HttpClient) {}

  private orderUrl = 'http://localhost:8080/order-portal/orders';

  idTypes : IdType[] = [
    {id:"CEDULA DE CIUDADANIA",name:"CEDULA DE CIUDADANIA"},
    {id:"CEDULA DE EXTRANJERIA",name:"CEDULA DE EXTRANJERIA"},
    {id:"NIT",name:"NIT"}
  ];

  public getIdTypes(){
    return this.idTypes;
  }

  public getOrders() {
    return this.http.get<Order[]>(this.orderUrl);
  }

  public deleteOrder(order) {
    return this.http.delete(this.orderUrl + "/"+ order.id);
  }

  public createOrder(order) {
    return this.http.post<Order>(this.orderUrl, order);
  }

  public updateOrder(order) {
    return this.http.put<Order>(this.orderUrl, order);
  }

  public getOrderById(id) {
    return this.http.get<Order>(this.orderUrl+"/"+id);
  }

}
