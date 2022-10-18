import {ProductManager} from '../../../../src/contexts/products/application/ProductManager';
import {ProductRepositoryMock} from '../__mocks__/ProductRepositoryMock';
import {input} from '../__mocks__/mocks/ResponseMocks';

let repository: ProductRepositoryMock;
let manager: ProductManager;

beforeEach(() => {
  repository = new ProductRepositoryMock();
  manager = new ProductManager(repository);
});

describe('ProductManager', () => {
  describe('GetItemProduct', () => {
    it('should return a valid product response', async () => {
      const itemId = input.idSuccessFlow;
      const productFinded = await manager.searchById(itemId);
      expect(productFinded.item.id).toEqual(itemId);
    });
  });

  describe('ListItemsProducts', () => {
    it('should find a valid list products', async () => {
      const term = 'televisor';
      const listProductsFinded = await manager.searchByTerm(term);
      expect(listProductsFinded.items[0].id).toEqual('MLA1118725350');
    });
  });
});
