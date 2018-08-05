import { OrderListColumn } from './OrderListTypes';
import { DisplayOrder, ProductType } from './OrderTypes';

type OrderListContainerProps = {
  columns: OrderListColumn[]
}

type OrderListContainerState = {
  filteredOrders: DisplayOrder[],
  productTypes: ProductType[]
}

export { OrderListContainerProps, OrderListContainerState };
