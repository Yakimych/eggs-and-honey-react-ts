import { AddOrderProps, AddOrderState } from '../../types/AddOrderTypes';
import { ProductType } from '../../types/OrderTypes';
import * as React from 'react';
import ProductSelector from '../ProductSelector/ProductSelector';
import PropTypes from 'prop-types';

class AddOrder extends React.Component<AddOrderProps, AddOrderState> {
  constructor(props: AddOrderProps) {
    super(props);
    this.state = { name: '', productType: null };
  }

  nameChanged = (event: SyntheticInputEvent<EventTarget>) => this.setState({ name: event.target.value });

  canAddOrder = () => !!this.state.name && !!this.state.productType;
 
  activeProductTypeChanged = (selectedProductType: ProductType | null) => {
    this.setState({ productType: selectedProductType });
    this.props.activeProductTypeChanged(selectedProductType);
  }

  render() {
    return (
      <div className="mt-3">
        <input type="text" className="mr-1" onChange={this.nameChanged} />
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.state.productType != null
            ? this.props.onAddOrder(this.state.name, this.state.productType)
            : null}
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
}

AddOrder.propTypes = {
  productTypes: PropTypes.array.isRequired,
  onAddOrder: PropTypes.func.isRequired,
  activeProductTypeChanged: PropTypes.func.isRequired
};

export default AddOrder;
