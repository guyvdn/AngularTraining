import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ToastrService } from '../toastr/toastr.service';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Injectable()
export class ProductsResolver implements Resolve<Product[]> {
  constructor(
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  public resolve() {
    return this.productService.getProducts().catch(err => {
      this.toastrService.showError(err.message);
      return Observable.of(Product[0]);
    });
  }
}
