import * as React from 'react';
import { OrderListContainerProps } from '../../types/OrderListContainerTypes';
import OrderListContainer from '../OrderListContainers/OrderListContainer';
import './UserPage.css';

class UserPage extends React.Component<OrderListContainerProps> {
  public render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow user-page-container">
        <h3 className="border-bottom border-gray pb-2 mb-0">Orders</h3>
        <OrderListContainer {...this.props} />
      </div>
    );
  }
}

export default UserPage;
