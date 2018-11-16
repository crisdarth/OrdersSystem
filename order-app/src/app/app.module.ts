import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './app.routing.module';
import {OrderService} from './order/order.service';
import {OrderDetailService} from './orderDetail/orderDetail.service';
import {ProductService} from './product/product.service';
import {HttpClientModule} from "@angular/common/http";
import {AddOrderComponent} from './order/add-order.component';
import {AddProductComponent} from './product/add-product.component';
import {EditProductComponent} from './product/edit-product.component';
import {AddOrderDetailComponent} from './orderDetail/add-orderDetail.component';
import {OrderDetailComponent } from './orderDetail/orderDetail.component';
import { EditOrderComponent } from './order/edit-order.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    AddOrderComponent,
    AddOrderDetailComponent,
	  ProductComponent,
    AddProductComponent,
    EditProductComponent,
    EditOrderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OrderService, ProductService, OrderDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
