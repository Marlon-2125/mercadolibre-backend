import {ProductManager} from '../../../../src/contexts/products/application/ProductManager';
import {ProductRepositoryMock} from '../__mocks__/ProductRepositoryMock';

let repository: ProductRepositoryMock;
let manager: ProductManager;

beforeEach(() => {
  repository = new ProductRepositoryMock();
  manager = new ProductManager(repository);
});

describe('ProductManager', () => {
  describe('GetItemProduct', () => {
    it('should find a valid product', async () => {
      const itemId = 'MLA1118725350';
      const productFinded = await manager.searchById(itemId);
      expect(productFinded.item.id).toEqual(itemId);
    });

    it('should find a ')
  });

  describe('ListItemsProducts', () => {
    it('should find a valid list products', async () => {
      const term = 'televisor';
      const listProductsFinded = await manager.searchByTerm(term);
      expect(listProductsFinded.items[0].id).toEqual('MLA1118725350');
    });
  });
});
