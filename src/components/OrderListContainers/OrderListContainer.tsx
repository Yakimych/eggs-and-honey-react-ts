import { Order, DisplayOrder, ProductType } from '../../types/OrderTypes';
import { OrderListContainerProps, OrderListContainerState } from '../../types/OrderListContainerTypes';
import * as React from 'react';
import OrderList from '../OrderList/OrderList';
import AddOrder from '../OrderList/AddOrder';
import OrderService from '../../services/OrderService';

class OrderListContainer extends React.Component<OrderListContainerProps, OrderListContainerState> {
  orders: Array<DisplayOrder> = [];

  constructor(props: OrderListContainerProps) {
    super(props);
    this.state = {
      filteredOrders: [],
      productTypes: []
    };
  }

  componentDidMount() {
    this.getOrders();
    this.getProductTypes();
  }

  getOrders = () => {
    OrderService.getOrders()
      .then((orders) => {
        this.orders = orders.map(this.toDisplayOrder);
        this.updateFilteredOrders();
      })
      .catch((error) => { console.log(error); });
  }

  getProductTypes = () => {
    OrderService.getProductTypes()
      .then((productTypes) => this.setState({ productTypes }))
      .catch((error) => { console.log(error); });
  }

  onAddOrder = (name: string, productType: ProductType) => {
    let existingOrders = this.orders.filter((o) => o.name === name && o.productType === productType);
    if (existingOrders.length > 0) {
      alert('Order already exists!');
    }
    else {
      OrderService.addOrder(name, productType)
        .then((addedOrderId: number) => {
          this.orders = this.orders.concat({ id: addedOrderId, name: name, productType: productType }); 
          this.updateFilteredOrders(productType);
        })
        .catch(() => alert('Failed to add order, please refresh the page and try again'));
    }
  }

  updateFilteredOrders = (productTypeName: string | null) => {
    let filteredOrders =
      !productTypeName
        ? this.orders
        : this.orders.filter((order) => order.productType === productTypeName);

    this.setState({ filteredOrders });
  }

  toDisplayOrder = (order: Order): DisplayOrder =>
    ({ id: order.id, name: order.name, productType: order.productType });

  render() {
    return (
      <div>
        <OrderList columns={this.props.columns} displayOrders={this.state.filteredOrders} />
        <AddOrder
          onAddOrder={this.onAddOrder}
          productTypes={this.state.productTypes}
          activeProductTypeChanged={this.updateFilteredOrders}
        />
      </div>
    );
  }
}

export default OrderListContainer;
