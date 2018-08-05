import { DisplayOrder } from '../../types/OrderTypes';
import { OrderListProps, OrderListColumn } from '../../types/OrderListTypes';
import * as React from 'react';
import OrderRow from './OrderRow';
import PropTypes from 'prop-types';

const OrderList = (props: OrderListProps) => {
  return (
    <div className="mt-3 mb-3 p-2 box-shadow">
      <div className="row">
        {props.actionLabel && <h6 className="col">{props.actionLabel}</h6>}
        {props.columns.map((column: OrderListColumn, index: number) => <h6 className="col" key={index}>{column.label}</h6>)}
      </div>
      {props.displayOrders.map((order: DisplayOrder, index: number) =>
        <OrderRow
          key={index}
          actionLabel={props.actionLabel}
          action={() => props.action ? props.action(order.id): undefined}
          displayOrder={order} />)}
    </div>
  );
};

OrderList.propTypes = {
  action: PropTypes.func,
  actionLabel: PropTypes.string,
  displayOrders: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
};

export default OrderList;
