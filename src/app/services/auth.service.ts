import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { PathsEnum } from "../common/enums/paths.enum";
import { ILoginResult } from "../common/models/login-res.interface";
import { AlertService } from "./alert.service";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private router: Router,
    private alertService: AlertService
  ) {}
  //https://desa.ies-webcontent.com.mx/xccm/user/validarUsuario
  //{ headers: { "Content-Type": "application/json" } }
  public login(user: string, password: string) {
    console.log("usuario", user, "contrasena", password);
    this.http
      .post(environment.wsUrl + PathsEnum.LOGIN, {
        usuario: user,
        contrasena: password,
        a: 1,
      })
      .subscribe(
        (res: any) => {
          console.log("loginres", res);
          if (res && res.resultado) {
            this.setSession(user, res.resultado);
          } else {
            this.alertService.showAlert("Credenciales invalidas", "Error");
          }
        },
        (err) => {
          console.log("err", err);
          this.alertService.showAlert(
            "Error intentando iniciar sesión",
            "Error"
          );
        }
      );
  }

  private setSession(usuario: string, session: ILoginResult) {
    this.sessionService.setCurrentSession({ ...session, usuario: usuario });
    this.router.navigateByUrl("/members/dashboard");
  }

  logout() {
    this.sessionService.setCurrentSession(null);
    this.router.navigateByUrl("/auth/login");
  }
}
