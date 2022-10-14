import {Product} from '../domain/entities/Product';
import {IProductRepository} from '../domain/contracts/IProductRepository';
import {IProductManager} from '../domain/contracts/IProductManager';
import {ProductDetailed} from '../domain/entities/ProductDetailed';
import {ProductListDTO} from '../domain/dto/ProductListDTO';
import {ProductItemDTO} from '../domain/dto/ProductItemDTO';

export class ProductManager implements IProductManager {
  private repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this.repository = repository;
  }

  async searchById(itemId: string): Promise<ProductItemDTO> {
    if (itemId === null || itemId === '') {
      throw new Error('El itemId no debe estar vacío o ser nulo');
    }
    const productItem = await this.repository.findById(itemId);
    const productDescription = await this.repository.findDetailsById(itemId);
    const productItemData = new ProductDetailed({
      id: productItem.data.id,
      title: productItem.data.title,
      price: productItem.data.price,
      picture: productItem.data.thumbnail,
      condition: productItem.data.condition,
      free_shipping: productItem.data.shipping.free_shipping,
      details: productDescription.data.plain_text
    });
    const productItemDTO = new ProductItemDTO({
      author: {
        name: 'Marlon',
        last_name: 'Navarrete'
      },
      item: productItemData
    });
    return productItemDTO;
  }

  async searchByTerm(term: string): Promise<ProductListDTO> {
    if (term === null || term === '') {
      throw new Error('El término no debe estar vacío o ser nulo');
    }
    const productList = await this.repository.findByTerm(term);
    const productListData = productList.data.results.map((product: any) =>
      new Product({
        id: product.id,
        title: product.title,
        price: product.price,
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping
      }));
    const productListDTO = new ProductListDTO({
      author: {
        name: 'Marlon',
        last_name: 'Navarrete'
      },
      categories: [],
      items: productListData
    });
    return productListDTO;
  }
}
