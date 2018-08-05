import * as React from 'react';
import OrderService from '../../services/OrderService';
import { AdminOrderListProps, AdminOrderListState } from '../../types/AdminOrderListTypes';
import { DisplayOrder, Order, ProductType } from '../../types/OrderTypes';
import OrderList from '../OrderList/OrderList';
import ProductSelector from '../ProductSelector/ProductSelector';

class AdminOrderListContainer extends React.Component<AdminOrderListProps, AdminOrderListState> {
  private orders: Order[] = [];
  private productTypes: ProductType[] = [];

  constructor(props: AdminOrderListProps) {
    super(props);
    this.state = {
      filteredOrders: [],
      selectedProductType: undefined
    };
  }

  public render() {
    return (
      <div>
        <ProductSelector
          products={this.productTypes}
          activeProductType={this.state.selectedProductType}
          onActiveChanged={this.updateFilteredOrders} />
        <OrderList
          action={this.resolveOrder}
          actionLabel={'Resolve'}
          columns={this.props.columns}
          displayOrders={this.state.filteredOrders.map(this.toDisplayOrder)} />
      </div>
    );
  }

  public componentDidMount = () =>
    this.getProductTypes();

  public componentWillReceiveProps = (nextProps: AdminOrderListProps) => {
    this.orders = nextProps.orders;
    this.updateFilteredOrders(this.state.selectedProductType);
  }

  private getProductTypes = () => {
    OrderService
      .getProductTypes()
      .then((productTypes) => this.productTypes = productTypes)
      .catch((error) => console.log(error));
  }
 
  private updateFilteredOrders = (selectedProductType?: ProductType) => {
    this.setState({ selectedProductType });

    const filteredOrders =
      !selectedProductType
        ? this.orders
        : this.orders.filter((order) => order.productType === selectedProductType);
    this.setState({ filteredOrders });
  }

  private resolveOrder = (orderId: number) => {
    OrderService.resolveOrder(orderId).then((order) => this.props.onOrderResolved(order));
  }

  private toDisplayOrder = (order: Order): DisplayOrder =>
    ({
      id: order.id,
      name: order.name,
      productType: order.productType,
      datePlaced: order.datePlaced.toLocaleDateString('sv')
    });

}

export default AdminOrderListContainer;
