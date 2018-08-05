import { Order, ResolvedOrder } from './OrderTypes';

type AdminPageState = {
  orders: Array<Order>,
  resolvedOrders: Array<ResolvedOrder>
}

export { AdminPageState };
