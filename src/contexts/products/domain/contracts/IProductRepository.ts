import {Product} from '../entities/Product';

export interface IProductRepository {
  findById(id: string): Promise<Product>;

  findByTerm(term: string): Promise<Product[]>;
}
