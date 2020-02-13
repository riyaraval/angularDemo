import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderIntercepter } from './master-folder/interceptor/auth-interceptor';
import { HomeComponent } from './master-folder/home/home.component';
// import { HeaderComponent } from './master-folder/header-footer-components/header/header.component';
import { HeaderFooterModule } from './master-folder/header-footer-components/header-footer.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderFooterModule
    ],
  providers: [
    AuthHeaderIntercepter,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderIntercepter,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
