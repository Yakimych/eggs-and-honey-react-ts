import { OrderListContainerProps } from '../../types/OrderListContainerTypes';
import * as React from 'react';
import OrderListContainer from '../OrderListContainers/OrderListContainer';
import './UserPage.css';
import PropTypes from 'prop-types';

class UserPage extends React.Component<OrderListContainerProps> {
  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow user-page-container">
        <h3 className="border-bottom border-gray pb-2 mb-0">Orders</h3>
        <OrderListContainer {...this.props} />
      </div>
    );
  }
}

UserPage.propTypes = {
  columns: PropTypes.array.isRequired
};

export default UserPage;
