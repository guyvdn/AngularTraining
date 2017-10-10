import '../rxjs-extensions';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { PricePipe } from './pipes/price.pipe';
import {
    ProductPanelComponent,
    ProductService,
    ProductsPanelViewComponent,
    ProductsResolver,
    ProductsTableViewComponent,
} from './products/index';
import { appRoutes } from './routes';

@NgModule({
  imports: [
    // other modules we depend on
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    // all declared components, directives, pipes, ...
    AppComponent,
    NavBarComponent,
    ProductsPanelViewComponent,
    ProductPanelComponent,
    ProductsTableViewComponent,
    PricePipe,
  ],
  providers: [
    // all services
    ProductService,
    ProductsResolver,
  ],
  bootstrap: [AppComponent], // the root component
})
export class AppModule {}
