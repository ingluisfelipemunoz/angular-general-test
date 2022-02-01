import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersRoutingModule {}
