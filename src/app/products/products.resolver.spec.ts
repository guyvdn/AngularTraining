import { async } from '@angular/core/testing';
import { Product } from 'app/products';
import { Observable } from 'rxjs/Rx';

import { ProductsResolver } from './products.resolver';

describe('ProductsResolver', () => {
  it(
    'should get the products from the service',

    async(() => {
      const expectedResponse = { prop: 1 };
      const productService = {
        getProducts: jest.fn().mockReturnValue(Observable.of(expectedResponse)),
      };
      const toastrService = {};

      const resolver = new ProductsResolver(
        productService as any,
        toastrService as any
      );

      resolver.resolve().subscribe(response => {
        expect(productService.getProducts).toBeCalled();
        expect(response).toBe(expectedResponse);
      });
    })
  );

  it(
    'should handle exceptions properly',

    async(() => {
      const expectedResponse = { prop: 1 };
      const productService = {
        getProducts: jest
          .fn()
          .mockReturnValue(Observable.throw(new Error('oeps'))),
      };
      const toastrService = {
        showError: jest.fn(),
      };

      const resolver = new ProductsResolver(
        productService as any,
        toastrService as any
      );

      resolver.resolve().subscribe(response => {
        expect(productService.getProducts).toBeCalled();
        expect(toastrService.showError).toBeCalledWith('oeps');
        expect(response).toBe(Product[0]);
      });
    })
  );
});
