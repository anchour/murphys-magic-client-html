export type CartLineItemOptionType = {
  label: string,
  value: string
}

export type CartLineItemType = {
  title: string,
  imageUrl: string,
  productUrl?: string,
  price: number,
  quantity: number,
  sku: string,
  availableStock?: number,
  index?: number,
  options?: CartLineItemOptionType[]
}

export type Asset = {
  src: string,
  size?: number,
}