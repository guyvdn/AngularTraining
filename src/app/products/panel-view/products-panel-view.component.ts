import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product.model';

@Component({
  templateUrl: 'products-panel-view.component.html',
})
export class ProductsPanelViewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public products: Product[];

  public ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }
}
