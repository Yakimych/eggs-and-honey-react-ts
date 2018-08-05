import { ProductType } from './OrderTypes.js';

type AddOrderProps = {
  productTypes: Array<ProductType>,
  onAddOrder: (name: string, product: ProductType) => void,
  activeProductTypeChanged: (name: ProductType | null) => void
}

type AddOrderState = {
  name: string,
  productType: ProductType | null
}

export { AddOrderProps, AddOrderState };
