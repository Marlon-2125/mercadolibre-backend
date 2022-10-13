import {Product} from '../entities/Product';

export interface IProductManager {
  searchById(id: string): Promise<Product>;

  searchByTerm(term: string): Promise<Product[]>;
}
