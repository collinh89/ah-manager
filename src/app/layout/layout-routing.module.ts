import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard",
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("../dashboard/dashboard.module").then(
            (module) => module.DashboardModule
          ),
      },
      {
        path: "services",
        loadChildren: () =>
          import("../services/services.module").then(
            (module) => module.ServicesModule
          ),
        // canActivate: [AuthorizeGuard],
        // data: { permissions: [Permissions.utilitiesRead] }
      },
      // {
      //   path: 'roles',
      //   loadChildren: () => import('../roles/roles.module').then((module) => module.RolesModule),
      //   canActivate: [AuthorizeGuard],
      //   data: { permissions: [Permissions.userRead] }
      // },
      // {
      //   path: 'email',
      //   loadChildren: () => import('../email/email.module').then((module) => module.EmailModule),
      //   canActivate: [AuthorizeGuard],
      //   data: { permissions: [Permissions.emailSend] }
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
