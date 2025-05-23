import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from "./header/header.component";
import { ConanPageComponent } from './conan-page/conan-page.component';
import { HeManPageComponent } from './he-man-page/he-man-page.component';
import { FranzPageComponent } from './franz-page/franz-page.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HeManPageComponent,
    FranzPageComponent,
    ConanPageComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,   // Import BrowserModule for browser compatibility
    RouterModule.forRoot(appRoutes),  // Use the routes with RouterModule
    CommonModule
  ],
  providers: [ provideHttpClient() ],
  bootstrap: [ AppComponent ]  // Bootstrap AppComponent as the entry point
})
export class AppModule { }
