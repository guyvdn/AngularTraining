import { Routes } from '@angular/router';

import { ProductsPanelViewComponent } from './products/panel-view/products-panel-view.component';
import { ProductsResolver } from './products/products.resolver';
import { ProductsTableViewComponent } from './products/table-view/products-table-view.component';

export const appRoutes: Routes = [
  {
    component: ProductsPanelViewComponent,
    path: '',
    resolve: { products: ProductsResolver },
  },
  {
    component: ProductsTableViewComponent,
    path: 'list',
    resolve: { products: ProductsResolver },
  },
];
