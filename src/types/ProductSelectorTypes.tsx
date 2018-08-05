import { ProductType } from './OrderTypes';

type ProductSelectorProps = {
  products: Array<ProductType>,
  activeProductType: ProductType | null,
  onActiveChanged: (activeProductName: ProductType | null) => void
}

export { ProductSelectorProps };