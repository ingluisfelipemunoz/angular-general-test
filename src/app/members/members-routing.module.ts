import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Component1Component } from "./component1/component1.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MembersComponent } from "./members.component";

const routes: Routes = [
  {
    path: "",
    component: MembersComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "component1",
        component: Component1Component,
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
