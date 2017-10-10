import { Component, Input } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-panel',
  templateUrl: 'product-panel.component.html',
})
export class ProductPanelComponent {
  @Input() public product: Product;
}
