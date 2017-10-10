import { async } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { ProductService } from './product.service';

describe('ProductService', () => {
  it(
    'should get the products',

    async(() => {
      const getProductsResponse = {
        selectedProducts: [
          { id: 1, title: 'prod 1' },
          { id: 2, title: 'prod 2' },
        ],
      };

      const httpClient = {
        get: jest.fn().mockReturnValue(Observable.of(getProductsResponse)),
      };

      const service = new ProductService(httpClient as any);

      service.getProducts().subscribe(products => {
        expect(httpClient.get).toBeCalledWith(environment.apiUrl + '/products');
        expect(products).toHaveLength(2);
        expect(products[0].id).toBe(1);
        expect(products[0].title).toBe('prod 1');
        expect(products[1].id).toBe(2);
        expect(products[1].title).toBe('prod 2');
      });
    })
  );
});
