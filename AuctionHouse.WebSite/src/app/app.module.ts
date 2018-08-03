import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TieredMenuModule } from 'primeng/tieredmenu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import {
  SharedModule,
  HeaderBarComponent,
  SideMenuComponent,
  ApiService,
  SessionService,
  UserService,
  ResponseInterceptor
} from './shared';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { MessageService } from 'primeng/api';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}], {useHash: true});

function populateService(userService: UserService) {
  return () => userService.populate();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SideMenuComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    rootRouting,
    TieredMenuModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    PanelMenuModule,
    HomeModule,
    AuthModule
  ],
  providers: [
    ApiService,
    SessionService,
    UserService,
    {
      provide: APP_INITIALIZER,
      useFactory: populateService,
      deps: [UserService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
