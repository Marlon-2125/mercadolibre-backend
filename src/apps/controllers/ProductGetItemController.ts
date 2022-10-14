import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {Controller} from './contracts/Controller';
import {IProductManager} from '../../contexts/products/domain/contracts/IProductManager';

export class ProductGetItemController implements Controller {
  private productManager: IProductManager;

  constructor(productManager: IProductManager) {
    this.productManager = productManager;
  }

  async run(req: Request, res: Response) {
    const itemId = req.params.id as string;
    try {
      const response = await this.productManager.searchById(itemId);
      res.status(httpStatus.OK).send(response);
    } catch (e: any) {
      console.log('[Error in ProductGetItemController]: ' + JSON.stringify(e));
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: {message: e.message}});
    }
  }
}
