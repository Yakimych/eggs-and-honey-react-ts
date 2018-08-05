import * as React from 'react';
import { ProductType } from '../../types/OrderTypes';
import { ProductSelectorProps } from '../../types/ProductSelectorTypes';
import PropTypes from 'prop-types';

class ProductSelector extends React.Component<ProductSelectorProps> {
  productTypeIsActive = (productType: ProductType) =>
    productType === this.props.activeProductType;

  productTypeClicked = (productType: ProductType) => {
    const newProductType: ProductType | null = this.props.activeProductType === productType ? null : productType;
    this.props.onActiveChanged(newProductType);
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          {this.props.products.map((product, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn-${this.productTypeIsActive(product) ? 'success' : 'outline-info'}`}
              onClick={() => this.productTypeClicked(product)}
            >
              {product}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

ProductSelector.propTypes = {
  products: PropTypes.array.isRequired,
  activeProductType: PropTypes.string,
  onActiveChanged: PropTypes.func.isRequired
};

export default ProductSelector;
