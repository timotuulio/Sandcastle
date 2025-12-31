import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
// Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from "./header/header.component";
import { ConanPageComponent } from './conan-page/conan-page.component';
import { HeManPageComponent } from './he-man-page/he-man-page.component';
import { FranzPageComponent } from './franz-page/franz-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HeManPageComponent,
    FranzPageComponent,
    ConanPageComponent,
    HeroListComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,   // Import BrowserModule for browser compatibility
    RouterModule.forRoot(appRoutes),  // Use the routes with RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap AppComponent as the entry point
})
export class AppModule { }
