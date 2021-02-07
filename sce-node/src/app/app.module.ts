import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageContentComponent } from './page-content/page-content.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

// Bootstrap Modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavComponent } from './header/nav/nav.component';
import { BannerComponent } from './header/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    PageContentComponent,
    HeaderComponent,
    NavComponent,
    BannerComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
