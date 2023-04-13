import { Product } from "./product.model";
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto";
import { faker } from "@faker-js/faker";

const products: Product[] = [];

const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}
const updateProduct = (id: Product[ 'id' ], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[ index ];
  products[ index ] = {
    ...prevData,
    ...changes,
  }
  return products[ index ];
}
const findProducts = (dto: FindProductDto): Product[] => {
  // dto.tags = [];  // no deja
  // no deberia dejar: 
  // dto.tags?.pop();
  return products;
}

// const deleteProduct = (data: Product) => {
//   products.push(data);
// }

export { products, addProduct, updateProduct, findProducts }