import { Express, Response, Request } from 'express';

export class ProductsController {
  public route = (app: Express) => {
    app.get('/api/item', this.getItems);
  };

  public getItems = async (_req: Request, res: Response, next: any) => {
    try {
      return res.json([
        { name: 'Product1', price: '$' },
        { name: 'Product2', price: '$$' }
      ]);
    } catch (e) {
      next(e);
    }
  };
}
