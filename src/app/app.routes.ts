import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'user/:id', loadComponent: () => import('./pages/user-detail/user-detail.component').then(m => m.UserDetailComponent) },
  { path: 'newuser', loadComponent: () => import('./pages/user-form/user-form.component').then(m => m.UserFormComponent) },
  { path: 'updateuser/:id', loadComponent: () => import('./pages/user-form/user-form.component').then(m => m.UserFormComponent) },
  { path: '**', redirectTo: '/home' }
];
