import { Product } from "./product.model";

const products: Product[] = [];

const addProduct = (data: Product) => {
  // data.id = 2;
  products.push(data);
}

export { products, addProduct }