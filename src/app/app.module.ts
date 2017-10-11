import '../rxjs-extensions';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { HttpErrorInterceptor } from './interceptors/httpError.interceptor';
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
import { ToastrComponent } from './toastr/toastr.component';
import { ToastrService } from './toastr/toastr.service';

@NgModule({
  imports: [
    // other modules we depend on
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot(),
  ],
  declarations: [
    // all declared components, directives, pipes, ...
    AppComponent,
    NavBarComponent,
    ProductsPanelViewComponent,
    ProductPanelComponent,
    ToastrComponent,
    ProductsTableViewComponent,
    PricePipe,
  ],
  providers: [
    // all services
    ProductService,
    ToastrService,
    ProductsResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent], // the root component
})
export class AppModule {}
