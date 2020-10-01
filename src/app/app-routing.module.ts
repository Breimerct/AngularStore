import { AdminGuard } from './guards/admin.guard';
import { LayoutComponent } from './layout/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        canActivate: [ AdminGuard ],
        loadChildren: () =>
          import('./pages/home/home.module')
          .then((m) => m.HomeModule),
      },
      {
        path: 'products',
        canActivate: [ AdminGuard ],
        loadChildren: () => import('./pages/products/products.module')
        .then(m => m.ProductsModule)
      },
      {
        path: 'contact',
        canActivate: [ AdminGuard ],
        loadChildren: () => import('./pages/contact/contact.module')
        .then(m => m.ContactModule)
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
    .then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/pageNotFound/pageNotFound.module')
    .then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
