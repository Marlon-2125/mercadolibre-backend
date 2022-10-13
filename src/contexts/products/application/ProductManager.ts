import {Product} from '../domain/entities/Product';
import {IProductRepository} from '../domain/contracts/IProductRepository';
import {IProductManager} from '../domain/contracts/IProductManager';

export class ProductManager implements IProductManager {
  private repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this.repository = repository;
  }

  async searchById(id: string): Promise<Product> {
    return this.repository.findById(id);
  }

  async searchByTerm(term: string): Promise<Product[]> {
    return this.repository.findByTerm(term);
  }
}
