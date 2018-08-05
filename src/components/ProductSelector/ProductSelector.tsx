import * as React from 'react';
import { ProductType } from '../../types/OrderTypes';
import { ProductSelectorProps } from '../../types/ProductSelectorTypes';

class ProductSelector extends React.Component<ProductSelectorProps> {
  public render() {
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

  private productTypeIsActive = (productType: ProductType) =>
    productType === this.props.activeProductType;

  private productTypeClicked = (productType: ProductType) => {
    const newProductType: ProductType | undefined = this.props.activeProductType === productType ? undefined : productType;
    this.props.onActiveChanged(newProductType);
  }

}

export default ProductSelector;
