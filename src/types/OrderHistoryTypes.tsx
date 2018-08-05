import { Order, ResolvedOrder } from './OrderTypes';
import { OrderListColumn } from './OrderListTypes';

type OrderHistoryProps = {
  columns: Array<OrderListColumn>,
  resolvedOrders: Array<ResolvedOrder>,
  onOrderUnresolved: (order: Order) => void
}

export { OrderHistoryProps };
