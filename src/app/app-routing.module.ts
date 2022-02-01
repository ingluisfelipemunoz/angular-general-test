import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./common/guards/auth.guard";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    canActivate: [AuthGuard],
    path: "members",
    loadChildren: () =>
      import("./members/members.module").then((m) => m.MembersModule),
  },
  { path: "", redirectTo: "members", pathMatch: "full" },
  { path: "**", redirectTo: "members" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
