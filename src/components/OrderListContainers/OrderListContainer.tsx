import * as React from 'react';
import OrderService from '../../services/OrderService';
import { OrderListContainerProps, OrderListContainerState } from '../../types/OrderListContainerTypes';
import { DisplayOrder, Order, ProductType } from '../../types/OrderTypes';
import AddOrder from '../OrderList/AddOrder';
import OrderList from '../OrderList/OrderList';

class OrderListContainer extends React.Component<OrderListContainerProps, OrderListContainerState> {
  private orders: DisplayOrder[] = [];

  constructor(props: OrderListContainerProps) {
    super(props);
    this.state = {
      filteredOrders: [],
      productTypes: []
    };
  }

  public render() {
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

  public componentDidMount() {
    this.getOrders();
    this.getProductTypes();
  }

  private getOrders = () => {
    OrderService.getOrders()
      .then((orders) => {
        this.orders = orders.map(this.toDisplayOrder);
        this.updateFilteredOrders();
      })
      .catch((error) => { console.log(error); });
  }

  private getProductTypes = () => {
    OrderService.getProductTypes()
      .then((productTypes) => this.setState({ productTypes }))
      .catch((error) => { console.log(error); });
  }

  private onAddOrder = (name: string, productType: ProductType) => {
    const existingOrders = this.orders.filter((o) => o.name === name && o.productType === productType);
    if (existingOrders.length > 0) {
      alert('Order already exists!');
    }
    else {
      OrderService.addOrder(name, productType)
        .then((addedOrderId: number) => {
          this.orders = this.orders.concat({ id: addedOrderId, name, productType }); 
          this.updateFilteredOrders(productType);
        })
        .catch(() => alert('Failed to add order, please refresh the page and try again'));
    }
  }

  private updateFilteredOrders = (productTypeName?: string) => {
    const filteredOrders =
      !productTypeName
        ? this.orders
        : this.orders.filter((order) => order.productType === productTypeName);

    this.setState({ filteredOrders });
  }

  private toDisplayOrder = (order: Order): DisplayOrder =>
    ({ id: order.id, name: order.name, productType: order.productType });
}

export default OrderListContainer;
