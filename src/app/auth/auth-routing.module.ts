import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AuthComponent } from "./auth.component";

export const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        component: LoginComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "**", redirectTo: "login" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
