import { ApiOrder, ApiResolvedOrder, Order, ProductType, ResolvedOrder } from '../types/OrderTypes';

const productTypeFromString = (orderTypeString: string): ProductType => {
  if (orderTypeString === 'Eggs' || orderTypeString === 'Honey') {
    return orderTypeString;
  }
  throw new Error(`Error parsing ProductType: ${orderTypeString}`);
};

export const toOrder = (apiOrder: ApiOrder): Order =>
  ({
    id: apiOrder.id,
    name: apiOrder.name,
    productType: productTypeFromString(apiOrder.order),
    datePlaced: new Date(apiOrder.datePlaced)
  });

export const toResolvedOrder = (apiResolvedOrder: ApiResolvedOrder): ResolvedOrder =>
  ({
    id: apiResolvedOrder.id,
    name: apiResolvedOrder.name,
    productType: productTypeFromString(apiResolvedOrder.order),
    datePlaced: new Date(apiResolvedOrder.datePlaced),
    dateResolved: new Date(apiResolvedOrder.dateResolved)
  });
