import { Order, ResolvedOrder } from './OrderTypes';

type AdminPageState = {
  orders: Order[],
  resolvedOrders: ResolvedOrder[]
}

export { AdminPageState };
