import { OrderListColumn } from './OrderListTypes';
import { Order, ResolvedOrder } from './OrderTypes';

type OrderHistoryProps = {
  columns: OrderListColumn[],
  resolvedOrders: ResolvedOrder[],
  onOrderUnresolved: (order: Order) => void
}

export { OrderHistoryProps };
