import * as React from 'react';
import { AddOrderProps, AddOrderState } from '../../types/AddOrderTypes';
import { ProductType } from '../../types/OrderTypes';
import ProductSelector from '../ProductSelector/ProductSelector';

class AddOrder extends React.Component<AddOrderProps, AddOrderState> {
  constructor(props: AddOrderProps) {
    super(props);
    this.state = { name: '', productType: undefined };
  }

  public render() {
    return (
      <div className="mt-3">
        <input type="text" className="mr-1" onChange={this.nameChanged} />
        <button
          className="btn btn-primary btn-sm"
          onClick={this.addOrderClick}
          disabled={!this.canAddOrder()}>
            Add
        </button>
        <ProductSelector
          products={this.props.productTypes}
          activeProductType={this.state.productType}
          onActiveChanged={this.activeProductTypeChanged} />
      </div>
    );
  }

  private addOrderClick = () =>
    this.state.productType != null
      ? this.props.onAddOrder(this.state.name, this.state.productType)
      : null;

  private nameChanged = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: event.target.value });

  private canAddOrder = () => !!this.state.name && !!this.state.productType;
 
  private activeProductTypeChanged = (selectedProductType?: ProductType) => {
    this.setState({ productType: selectedProductType });
    this.props.activeProductTypeChanged(selectedProductType);
  }
}

export default AddOrder;
