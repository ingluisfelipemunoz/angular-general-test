import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MembersRoutingModule } from "./members-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MembersRoutingModule],
})
export class MembersModule {}
