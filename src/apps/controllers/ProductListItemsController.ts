import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {Controller} from './contracts/Controller';
import {IProductManager} from '../../contexts/products/domain/contracts/IProductManager';

export class ProductListItemsController implements Controller {
  private productManager: IProductManager;

  constructor(productManager: IProductManager) {
    this.productManager = productManager;
  }

  async run(req: Request, res: Response) {
    const term = req.query.q as string;
    console.log('Este es el termino elegido:' + term);
    try {
      const response = await this.productManager.searchByTerm(term);
      res.status(httpStatus.OK).send(response);
    } catch (e: any) {
      console.log('[Error in ProductListItemsController]: ' + JSON.stringify(e));
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: {message: e.message}});
    }
  }
}
