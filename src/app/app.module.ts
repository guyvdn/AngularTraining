import '../rxjs-extensions';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { NavBarComponent } from './nav/navbar.component';
import { ProductPanelComponent } from './products/panel-view/product-panel.component';
import { ProductsPanelViewComponent } from './products/panel-view/products-panel-view.component';
import { ProductService } from './products/product.service';
import { ProductsResolver } from './products/products.resolver';
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
    SampleComponent,
    NavBarComponent,
    ProductsPanelViewComponent,
    ProductPanelComponent,
  ],
  providers: [
    // all services
    ProductService,
    ProductsResolver,
  ],
  bootstrap: [AppComponent], // the root component
})
export class AppModule {}
