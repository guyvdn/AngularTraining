import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Product } from './product.model';
import { ProductService } from './product.service';

@Injectable()
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private productService: ProductService) {}

  public resolve() {
    return this.productService.getProducts();
  }
}
