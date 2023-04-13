import { Product } from "./product.model"

// utility types => tipos que omiten campos y añaden nuevos

// Omit omite los campos que queramos y devuelve un nuevo tipo sin ellos
interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// Partial vuelve todos los campos opcionales de un tipo/interface
interface UpdateProductDto extends Partial<CreateProductDto> { }
// Se pueden anidar los utility types:
interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}


// Pick devuelve un nuevo tipo solo con los campos que elijamos
// type example = Pick<Product, 'color' | 'description'>
// Required vuelve todo obligatorio
// type exmple2 = Required<Product>;
// Readonly los pone a todos los campos como solo lectura
// type exmple3 = Readonly<Product>;

export { CreateProductDto, UpdateProductDto, FindProductDto };