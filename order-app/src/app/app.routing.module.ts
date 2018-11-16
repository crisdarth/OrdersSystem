import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order/order.component';
import {AddOrderComponent} from './order/add-order.component';
import { ProductComponent } from './product/product.component';
import {AddProductComponent} from './product/add-product.component';
import {EditProductComponent} from './product/edit-product.component';
import { AddOrderDetailComponent } from './orderDetail/add-orderDetail.component';
import { EditOrderComponent } from './order/edit-order.component';

const routes: Routes = [
  { path: 'ordersList', component: OrderComponent },
  { path: 'addOrder', component: AddOrderComponent },
  { path: 'order/:id/addOrderDetail', component: AddOrderDetailComponent },
  { path: 'productsList', component: ProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'product/:id', component: EditProductComponent },
  { path: 'order/:id', component: EditOrderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
