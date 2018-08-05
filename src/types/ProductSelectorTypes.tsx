import { ProductType } from './OrderTypes';

type ProductSelectorProps = {
  products: ProductType[],
  activeProductType?: ProductType,
  onActiveChanged: (activeProductName?: ProductType) => void
}

export { ProductSelectorProps };