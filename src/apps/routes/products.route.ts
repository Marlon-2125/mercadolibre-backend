import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const productGetController = container.get('Apps.controllers.ProductGetController');
  router.get('/products/:id', (req: Request, res: Response) => productGetController.run(req, res));
};
