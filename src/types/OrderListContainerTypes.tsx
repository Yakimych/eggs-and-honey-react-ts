import { OrderListColumn } from './OrderListTypes';
import { DisplayOrder, ProductType } from './OrderTypes';

type OrderListContainerProps = {
  columns: Array<OrderListColumn>
}

type OrderListContainerState = {
  filteredOrders: Array<DisplayOrder>,
  productTypes: Array<ProductType>
}

export { OrderListContainerProps, OrderListContainerState };
