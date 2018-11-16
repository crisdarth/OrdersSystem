import {Order} from "./order.model";
import {Product} from "./product.model";

export class OrderDetail {
  id: number;
  quantity: number;
  order: Order;
  product: Product;
  subtotal: number;
}