import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'dashboard', component: DashboardComponent }
];
