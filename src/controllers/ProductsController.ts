import { Express, Response, Request } from 'express';

export class ProductsController {
  public route = (app: Express) => {
    app.get('/api/item', this.getItems);
  };

  public getItems = async (req: Request, res: Response, next: any) => {
    try {
      return res.json([{ name: 'Item 1' }, { name: 'Item 2' }]);
    } catch (e) {
      next(e);
    }
  };
}
