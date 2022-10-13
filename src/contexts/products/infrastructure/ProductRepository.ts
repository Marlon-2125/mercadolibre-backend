import {Product} from '../domain/entities/Product';
import {IProductRepository} from '../domain/contracts/IProductRepository';

export class ProductRepository implements IProductRepository {
  constructor() {
  }

  async findById(id: string): Promise<Product> {
    const options = {
      host: 'https://api.mercadolibre.com',
      path: '/sites/MLA/search?q=scooter',
      method: 'GET'
    };
    console.log(options);
    return Promise.resolve(new Product({id: 'hola', name: 'mundo', duration: 'salvage'}));
  }

  async findByTerm(term: string): Promise<Product[]> {
    return Promise.resolve([]);
  }
}
