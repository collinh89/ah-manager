import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./auth/auth.module').then((module) => module.AuthModule),
  // },
  {
    // canActivate: [AuthenticationWithLoginGuard, AuthGuard],
    path: '',
    loadChildren: () =>
      import('./layout/layout.module').then((module) => module.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
