import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product.model';

@Component({
  template: `
    <div>
      <h1>Products</h1>
      <div class="row">
        <div *ngFor="let product of products" class="col-md-4">
          <h3>{{product.title}}</h3>
        </div>
      </div>
    </div>
  `,
})
export class ProductsPanelViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public products: Product[];

  public ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }
}
