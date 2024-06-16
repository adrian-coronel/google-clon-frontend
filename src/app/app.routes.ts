import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { SupportFormComponent } from './support/support-form/support-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:query',
    component: SearchComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'support/form',
    component: SupportFormComponent
  }
];
