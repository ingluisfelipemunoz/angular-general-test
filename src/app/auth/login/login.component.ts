import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailValidationUtil } from "src/app/common/utils/email-validation.util";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  authFrm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.authFrm = this.fb.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      usuario: ["", [Validators.required, Validators.minLength(1)]],
    });
  }

  login(form: FormGroup) {
    const isValid = this.authFrm.valid;
    const data = form.value;
    console.log("isValid", isValid, "data", data);
    this.authService.login(data.usuario, data.password);
  }
}
