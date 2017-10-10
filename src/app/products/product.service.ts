import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment.prod';
import { Product } from './product.model';

interface IGetProductsResponse {
  selectedProducts: Product[];
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http
      .get<IGetProductsResponse>(environment.apiUrl + '/products')
      .map(response => response.selectedProducts);
  }
}
