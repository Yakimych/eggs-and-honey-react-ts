import { ProductType, Order } from './OrderTypes';
import { OrderListColumn } from './OrderListTypes';

type AdminOrderListProps = {
  columns: Array<OrderListColumn>,
  orders: Array<Order>,
  onOrderResolved: (order: Order) => void
}

type AdminOrderListState = {
  filteredOrders: Array<Order>,
  selectedProductType: ProductType | null
}

export { AdminOrderListProps, AdminOrderListState };
