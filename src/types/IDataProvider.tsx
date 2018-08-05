import { Order, ProductType, ResolvedOrder } from './OrderTypes';

interface IDataProvider {
  getOrders(): Promise<Order[]>;
  getResolvedOrders (): Promise<ResolvedOrder[]>;
  addOrder(name: string, productType: ProductType): Promise<number>;
  resolveOrder(orderId: number): Promise<ResolvedOrder>;
  unresolveOrder(orderId: number): Promise<Order>;
}

export { IDataProvider };
