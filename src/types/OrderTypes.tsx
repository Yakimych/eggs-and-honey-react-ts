type ProductType = "Eggs" | "Honey";

type DisplayOrder = {
  id: number,
  name: string,
  productType: ProductType,
  datePlaced?: string,
  dateResolved?: string,
}

type Order = {
  id: number,
  name: string,
  productType: ProductType,
  datePlaced: Date
}

type ResolvedOrder = {
  id: number,
  name: string,
  productType: ProductType,
  datePlaced: Date,
  dateResolved: Date
}

type ApiOrder = {
  id: number,
  name: string,
  order: string,
  datePlaced: string
}

type ApiResolvedOrder = {
  id: number,
  name: string,
  order: string,
  datePlaced: string,
  dateResolved: string
}

type OrderItems = {
  items: Array<ApiOrder>
}

type ResolvedOrderItems = {
  items: Array<ApiResolvedOrder>
}

type ResultWithId = {
  id: number
}

export {
  ProductType,
  Order,
  ResolvedOrder,
  DisplayOrder,
  OrderItems,
  ResolvedOrderItems,
  ApiOrder,
  ApiResolvedOrder,
  ResultWithId
};
