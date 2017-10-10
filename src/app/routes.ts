import { Routes } from '@angular/router';

import { SampleComponent } from './components/sample/sample.component';
import { ProductsPanelViewComponent } from './products/panel-view/products-panel-view.component';
import { ProductsResolver } from './products/products.resolver';

export const appRoutes: Routes = [
  {
    component: ProductsPanelViewComponent,
    path: '',
    resolve: { products: ProductsResolver },
  },
  {
    component: SampleComponent,
    path: 'list',
  },
];
