import {IProductRepository} from '../../../../src/contexts/products/domain/contracts/IProductRepository';
import {
  findByIdErrorResponse,
  findByIdSuccessResponse,
  findByTermSuccessResponse, findCategorySuccessResponse,
  findDetailsByIdSuccessResponse, input
} from './mocks/ResponseMocks';

export class ProductRepositoryMock implements IProductRepository {

  async findById(id: string): Promise<any> {
    return Promise.resolve(id === input.idSuccessFlow ? findByIdSuccessResponse : findByIdErrorResponse);
  }

  async findByTerm(term: string): Promise<any> {
    return Promise.resolve(findByTermSuccessResponse);
  }

  async findDetailsById(id: string): Promise<any> {
    return Promise.resolve(findDetailsByIdSuccessResponse);
  }

  async findCategory(categoryId: string): Promise<any> {
    return Promise.resolve(findCategorySuccessResponse);
  }

}
