import { IDataProvider } from '../types/IDataProvider';
import { ApiOrder, ApiResolvedOrder, Order, OrderItems, ProductType, ResolvedOrder, ResolvedOrderItems } from '../types/OrderTypes';
import { toOrder, toResolvedOrder } from './ApiOrderMapping';
let currentOrderId = 1;
const fakeOrders: OrderItems = {
  items: [
    { id: currentOrderId++, name: 'FakeName1', order: 'Eggs', datePlaced: '2015-01-01' },
    { id: currentOrderId++, name: 'FakeName2', order: 'Eggs', datePlaced: '2015-01-02' },
    { id: currentOrderId++, name: 'FakeName3', order: 'Honey', datePlaced: '2015-01-03' }
  ]
};

let currentResolvedOrderId = 1;
const fakeResolvedOrders: ResolvedOrderItems = {
  items: [
    { id: currentResolvedOrderId++, name: 'FakeName10', order: 'Eggs', datePlaced: '2015-01-01', dateResolved: '2016-01-01' },
    { id: currentResolvedOrderId++, name: 'FakeName20', order: 'Eggs', datePlaced: '2015-01-02', dateResolved: '2016-01-02' },
    { id: currentResolvedOrderId++, name: 'FakeName30', order: 'Honey', datePlaced: '2015-01-03', dateResolved: '2016-01-03' }
  ]
};

class FakeDataProvider implements IDataProvider {
  public getOrders = (): Promise<Order[]> =>
    new Promise((resolve) => {
      resolve(fakeOrders.items.slice().map(toOrder));
    });

  public getResolvedOrders = (): Promise<ResolvedOrder[]> =>
    new Promise((resolve) => {
      resolve(fakeResolvedOrders.items.slice().map(toResolvedOrder));
    });

  public addOrder = (name: string, productType: ProductType): Promise<number> =>
    new Promise((resolve) => {
      console.log(`FakeDataProvider: adding order: ${name} ${productType}`);
      fakeOrders.items.push({ id: currentOrderId++, name, order: productType, datePlaced: '' });
      resolve(currentOrderId);
    });

  public resolveOrder = (orderId: number): Promise<ResolvedOrder> =>
    new Promise((resolve, reject) => {
      console.log(`FakeDataProvider: resolving order: ${orderId}`);
      const orderToResolve = fakeOrders.items.find((order) => order.id === orderId);
      if (!orderToResolve) {
        reject('Order to resolve not found');
      }
      else {
        fakeOrders.items = fakeOrders.items.filter((order) => order.id !== orderId);
        const newResolvedOrder: ApiResolvedOrder = 
          {
            id: currentResolvedOrderId++,
            name: orderToResolve.name,
            order: orderToResolve.order,
            datePlaced: orderToResolve.datePlaced,
            dateResolved: new Date().toString()
          };
        fakeResolvedOrders.items.push(newResolvedOrder);
        resolve(toResolvedOrder(newResolvedOrder));
      }
    });

  public unresolveOrder = (resolvedOrderId: number): Promise<Order> =>
    new Promise((resolve, reject) => {
      console.log(`FakeDataProvider: unresolving order: ${resolvedOrderId}`);
      const orderToUnresolve = fakeResolvedOrders.items.find((order) => order.id === resolvedOrderId);
      if (!orderToUnresolve) {
        reject('Order to unresolve not found');
      }
      else {
        fakeResolvedOrders.items = fakeResolvedOrders.items.filter((order) => order.id !== resolvedOrderId);
        const newUnresolvedOrder: ApiOrder = 
          {
            id: currentOrderId++,
            name: orderToUnresolve.name,
            order: orderToUnresolve.order,
            datePlaced: orderToUnresolve.datePlaced
          };
        fakeOrders.items.push(newUnresolvedOrder);
        resolve(toOrder(newUnresolvedOrder));
      }
    });
}

export default new FakeDataProvider();
