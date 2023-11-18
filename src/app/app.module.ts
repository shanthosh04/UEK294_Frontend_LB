import {ToastrModule} from "ngx-toastr";
import {FooterComponent} from "./elements/footer/footer.component";
import {HeaderComponent} from "./elements/header/header.component";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiModule, Configuration} from "./openapi-client";
import {AuthorizationInterceptor} from "./interceptors/authorization.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule.forRoot(() => {
      return new Configuration({
        basePath: 'http://localhost:8080'
      })
    }),
    HeaderComponent,
    ToastrModule.forRoot(),
    FooterComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthorizationInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
