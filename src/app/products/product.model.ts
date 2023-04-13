import { Category } from "../categories/category.model";
import { BaseModel } from "../base.model";

type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  category: Category
}

export { Sizes, Product }