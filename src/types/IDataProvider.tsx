import { ProductType, Order, ResolvedOrder } from './OrderTypes';

interface IDataProvider {
  getOrders(): Promise<Array<Order>>;
  getResolvedOrders (): Promise<Array<ResolvedOrder>>;
  addOrder(name: string, productType: ProductType): Promise<number>;
  resolveOrder(orderId: number): Promise<ResolvedOrder>;
  unresolveOrder(orderId: number): Promise<Order>;
}

export { IDataProvider };
