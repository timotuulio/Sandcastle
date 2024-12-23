import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,   // Declare AppComponent
    SidebarComponent // Declare SidebarComponent
  ],
  imports: [
    BrowserModule   // Import BrowserModule for browser compatibility
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap AppComponent as the entry point
})
export class AppModule { }
