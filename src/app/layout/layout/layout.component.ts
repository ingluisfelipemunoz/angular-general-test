import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { SessionService } from "src/app/services/session.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"],
})
export class LayoutComponent implements OnInit {
  session: any = {};
  constructor(
    private authService: AuthService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.loadUserInfo();
  }

  logout() {
    this.authService.logout();
  }

  loadUserInfo() {
    this.session = this.sessionService.getCurrentSession() || {};
  }
}
