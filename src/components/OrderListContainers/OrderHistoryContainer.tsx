import * as React from 'react';
import OrderService from '../../services/OrderService';
import { OrderHistoryProps } from '../../types/OrderHistoryTypes';
import { DisplayOrder, ResolvedOrder } from '../../types/OrderTypes';
import OrderList from '../OrderList/OrderList';

class OrderHistoryContainer extends React.Component<OrderHistoryProps> {
  public render() {
    return <OrderList
      columns={this.props.columns}
      actionLabel={'Unresolve'}
      action={this.unresolveOrder}
      displayOrders={this.props.resolvedOrders.map(this.toDisplayOrder)} />;
  }

  private unresolveOrder = (resolvedOrderId: number) => {
    OrderService
      .unresolveOrder(resolvedOrderId)
      .then((order) => this.props.onOrderUnresolved(order))
      .catch((error) => console.log(error));
  }

  private toDisplayOrder = (order: ResolvedOrder): DisplayOrder =>
    ({
      id: order.id,
      name: order.name,
      productType: order.productType,
      datePlaced: order.datePlaced.toLocaleDateString('sv'),
      dateResolved: order.dateResolved.toLocaleDateString('sv')
    });
}

export default OrderHistoryContainer;
