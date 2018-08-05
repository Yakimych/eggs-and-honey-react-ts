import { ProductType } from './OrderTypes.js';

type AddOrderProps = {
  productTypes: ProductType[],
  onAddOrder: (name: string, product: ProductType) => void,
  activeProductTypeChanged: (name?: ProductType) => void
}

type AddOrderState = {
  name: string,
  productType?: ProductType
}

export { AddOrderProps, AddOrderState };
