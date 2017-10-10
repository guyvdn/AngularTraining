import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product.model';

@Component({
  templateUrl: 'products-table-view.component.html',
})
export class ProductsTableViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public products: Product[];

  public ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }
}
