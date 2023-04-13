import { addProduct } from "./products/product.service";

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 90,
  size: 'L',
  category: {
    id: '12',
    name: 'c1',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})