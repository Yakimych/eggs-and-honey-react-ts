import axios, { AxiosResponse } from 'axios';
import { IDataProvider } from '../types/IDataProvider';
import {
  ApiOrder,
  ApiResolvedOrder,
  Order,
  OrderItems,
  ProductType,
  ResolvedOrder,
  ResolvedOrderItems,
  ResultWithId
} from '../types/OrderTypes';
import { toOrder, toResolvedOrder } from './ApiOrderMapping';

const apiUrl = 'http://localhost:5000/api/v1/';
const getOrdersUrl = `${apiUrl}orders`;
const getResolvedOrdersUrl = `${apiUrl}resolvedorders`;
const addOrderUrl = `${apiUrl}orders`;
const resolveOrderUrl = `${apiUrl}orders/resolve`;
const unresolveOrderUrl = `${apiUrl}resolvedorders/unresolve`;

class DataProvider implements IDataProvider {
  public getOrders = (): Promise<Order[]> =>
    axios
      .get(getOrdersUrl)
      .then((result: AxiosResponse<OrderItems>) => result.data.items.map(toOrder));

  public getResolvedOrders = (): Promise<ResolvedOrder[]> =>
    axios
      .get(getResolvedOrdersUrl)
      .then((result: AxiosResponse<ResolvedOrderItems>) => result.data.items.map(toResolvedOrder));

  public addOrder = (name: string, productType: ProductType): Promise<number> =>
    axios
      .post(addOrderUrl, { name, order: productType })
      .then((result: AxiosResponse<ResultWithId>) => result.data.id);

  public resolveOrder = (orderId: number): Promise<ResolvedOrder> =>
    axios
      .post(resolveOrderUrl, { id: orderId })
      .then((result: AxiosResponse<ApiResolvedOrder>) => toResolvedOrder(result.data));

  public unresolveOrder = (orderId: number): Promise<Order> =>
    axios
      .post(unresolveOrderUrl, { id: orderId })
      .then((result: AxiosResponse<ApiOrder>) => toOrder(result.data));
}

export default new DataProvider();
