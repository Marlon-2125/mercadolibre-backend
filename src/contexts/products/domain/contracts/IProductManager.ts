import {ProductListDTO} from '../dto/ProductListDTO';
import {ProductItemDTO} from '../dto/ProductItemDTO';

export interface IProductManager {
  searchById(id: string): Promise<ProductItemDTO>;

  searchByTerm(term: string): Promise<ProductListDTO>;
}
