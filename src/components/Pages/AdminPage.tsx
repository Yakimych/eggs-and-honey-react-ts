import * as React from 'react';
import OrderService from '../../services/OrderService';
import { AdminPageState } from '../../types/AdminPageTypes';
import AdminOrderListContainer from '../OrderListContainers/AdminOrderListContainer';
import OrderHistory from '../OrderListContainers/OrderHistoryContainer';
import './AdminPage.css';

const columns = [
  // TODO: Make name and order hardcoded in the list?
  { name: 'name', label: 'Name' },
  { name: 'order', label: 'Order' },
  { name: 'datePlaced', label: 'Date Placed' }
];

const historyColumns = columns.concat([ { name: 'dateResolved', label: 'Date Resolved' } ]);

class AdminPage extends React.Component<any, AdminPageState> {
  public state = { orders: [], resolvedOrders: [] };

  public render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow admin-page-container">
        <h3>Admin View</h3>
        <AdminOrderListContainer
          columns={columns}
          orders={this.state.orders}
          onOrderResolved={this.handleOrderResolutionChanged} />
        <OrderHistory
          columns={historyColumns}
          resolvedOrders={this.state.resolvedOrders}
          onOrderUnresolved={this.handleOrderResolutionChanged} />
      </div>
    );
  }
  public componentDidMount() {
    this.getOrders();
    this.getOrderHistory();
  }

  private getOrders = () => {
    OrderService.getOrders()
      .then((orders) => this.setState({ orders }))
      .catch((error) => console.log(error));
  }

  private getOrderHistory = () => {
    OrderService.getOrderHistory()
      .then((resolvedOrders) => this.setState({ resolvedOrders }))
      .catch((error) => console.log(error));
  }

  private handleOrderResolutionChanged = () => {
    this.getOrders();
    this.getOrderHistory();
  }
}

export default AdminPage;
