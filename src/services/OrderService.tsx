import { Order, ProductType, ResolvedOrder } from '../types/OrderTypes';
import dataProviderFactory from './DataProviderFactory';

const dataProvider = dataProviderFactory.getDataProvider();

class OrderService {
  public getOrders = (): Promise<Order[]> =>
    dataProvider.getOrders();

  public getOrderHistory = (): Promise<ResolvedOrder[]> => 
    dataProvider.getResolvedOrders();

  public getProductTypes = (): Promise<ProductType[]> =>
    new Promise((resolve) => {
      resolve([ 'Eggs', 'Honey' ]);
    });

  public addOrder = (name: string, productType: ProductType) =>
    dataProvider.addOrder(name, productType);

  public resolveOrder = (orderId: number) =>
    dataProvider.resolveOrder(orderId);

  public unresolveOrder = (resolvedOrderId: number) =>
    dataProvider.unresolveOrder(resolvedOrderId);
}

export default new OrderService();
