import { OrderListColumn } from './OrderListTypes';
import { Order, ProductType } from './OrderTypes';

type AdminOrderListProps = {
  columns: OrderListColumn[],
  orders: Order[],
  onOrderResolved: (order: Order) => void
}

type AdminOrderListState = {
  filteredOrders: Order[],
  selectedProductType?: ProductType
}

export { AdminOrderListProps, AdminOrderListState };
