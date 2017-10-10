import { Routes } from '@angular/router';

import { SampleComponent } from './app/components/sample/sample.component';

export const appRoutes: Routes = [
  {
    component: SampleComponent,
    path: '',
  },
  {
    component: SampleComponent,
    path: 'list',
  },
];
