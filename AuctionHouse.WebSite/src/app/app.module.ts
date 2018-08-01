import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {PanelMenuModule} from 'primeng/panelmenu';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TieredMenuModule,
    PanelModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
