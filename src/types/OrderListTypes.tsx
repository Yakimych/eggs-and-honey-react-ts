import { DisplayOrder } from './OrderTypes';
type OrderListColumn = {
  name: string,
  label: string
}

type OrderListProps = {
  action?: (id: number) => void,
  actionLabel?: string,
  displayOrders: DisplayOrder[],
  columns: OrderListColumn[]
}

export { OrderListColumn, OrderListProps };
