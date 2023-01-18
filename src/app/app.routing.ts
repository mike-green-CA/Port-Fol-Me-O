import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { AppComponent }          from './app.component';
import { PageDefault }           from './app.page-default';

const appRoutes: Routes = [
  { path: 'page-default', component: PageDefault },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);