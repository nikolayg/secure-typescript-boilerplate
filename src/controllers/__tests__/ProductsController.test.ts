import 'jest';
import { mockRequestResponse } from '../../testUtil';
import { ProductsController } from '../ProductsController';

const controller = new ProductsController();

describe('ProductsController', () => {
  // afterAll(async () =>  { } );
  // beforeAll(async () => { });
  // afterEach(async () => { });
  // beforeEach(async () => { });

  describe('getItems', () => {
    test('Returns the items', async () => {
      const { req, res, next } = mockRequestResponse();
      await controller.getItems(req, res, next);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
