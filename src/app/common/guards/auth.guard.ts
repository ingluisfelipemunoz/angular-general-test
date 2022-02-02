import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/services/auth.service";
import { SessionService } from "src/app/services/session.service";
import { Roles } from "../enums/roles.enum";
import { ILoginResult } from "../models/login-res.interface";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private authService: AuthService,
    private alertService: AlertService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const session = this.sessionService.getCurrentSession() as ILoginResult;
    const isValid = session && session.desc_rol == Roles.DISTRIBUIDOR;
    console.log("session", session, "isValid", isValid);
    if (!isValid) {
      this.alertService.showAlert(
        "Solo usuarios en sucursal DISTRIBUIDOR tienen acceso a estos modulos",
        "Advertencia"
      );
      this.authService.logout();
      return false;
    }
    return true;
  }
}
