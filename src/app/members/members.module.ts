import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MembersRoutingModule } from "./members-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MembersComponent } from "./members.component";
import { LayoutModule } from "../layout/layout.module";
import { Component1Component } from "./component1/component1.component";
import { MaterialModule } from "../common/material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent, MembersComponent, Component1Component],
  imports: [
    CommonModule,
    MembersRoutingModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class MembersModule {}
