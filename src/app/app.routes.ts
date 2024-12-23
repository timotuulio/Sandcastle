import { Routes } from '@angular/router';
import { ConanPageComponent } from './conan-page/conan-page.component';
import { HeManPageComponent } from './he-man-page/he-man-page.component';
import { FranzPageComponent } from './franz-page/franz-page.component';

export const appRoutes: Routes = [
  { path: 'heman', component: HeManPageComponent },
  { path: 'franz', component: FranzPageComponent },
  { path: 'conan', component: ConanPageComponent },
  { path: '', redirectTo: '/heman', pathMatch: 'full' },  // Default route
];
