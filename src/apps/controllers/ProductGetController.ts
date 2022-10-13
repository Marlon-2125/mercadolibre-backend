import {Request, Response} from 'express';
import httpStatus from 'http-status';
import {Controller} from './contracts/Controller';
import {IProductManager} from '../../contexts/products/domain/contracts/IProductManager';

export class ProductGetController implements Controller {
  private productManager: IProductManager;

  constructor(productManager: IProductManager) {
    this.productManager = productManager;
  }

  async run(req: Request, res: Response) {
    const term = req.query.id as string;
    const responseMeli = await this.productManager.searchById(term);
    res.status(httpStatus.CREATED).send(responseMeli);
  }
}
