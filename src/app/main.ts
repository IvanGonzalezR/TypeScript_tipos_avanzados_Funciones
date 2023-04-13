import { faker } from '@faker-js/faker'
import { addProduct, products, updateProduct, findProducts } from "./products/product.service";

for (let index = 0; index < 50; index++) {
  addProduct({
    // id: faker.datatype.uuid(),
    // createdAt: faker.date.recent(),
    // updatedAt: faker.date.recent(),
    // category: {
    //   id: faker.datatype.uuid(),
    //   name: faker.commerce.department(),
    //   createdAt: faker.date.recent(),
    //   updatedAt: faker.date.recent(),
    // },
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 1200, precision: 2 }),
    categoryId: faker.datatype.uuid(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements(),
    size: faker.helpers.arrayElement([ 'M', 'S', 'L', 'XL' ]),
  })
}

console.log(
  products[ 0 ]
);

updateProduct(products[ 0 ].id, {
  title: 'New title',
  stock: 80,
})

findProducts({
  stock: 10,
  color: 'red',
  tags: [ 'a', 'b' ],
});