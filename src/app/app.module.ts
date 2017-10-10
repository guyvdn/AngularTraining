import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from '../routes';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    // other modules we depend on
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    // all declared components, directives, pipes, ...
    AppComponent,
    SampleComponent,
    NavBarComponent,
  ],
  providers: [
    // all services
  ],
  bootstrap: [AppComponent], // the root component
})
export class AppModule {}
