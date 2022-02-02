import { HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailValidationUtil } from "src/app/common/utils/email-validation.util";
import { TimeUtil } from "src/app/common/utils/time.util";
import { AuthService } from "src/app/services/auth.service";
import { CountryService } from "src/app/services/country.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  frm: FormGroup;
  minMonths: number = 1;
  maxDays: number = 1;
  minDate: Date;
  maxDate: Date;
  countries: any[] = [];
  constructor(private fb: FormBuilder, private countryService: CountryService) {
    this.setDateLimitations();
  }

  ngOnInit() {
    this.buildForm();
    this.loadCountries();
  }

  buildForm() {
    this.frm = this.fb.group({
      fechaReserva: ["", [Validators.required]],
      correo: [
        "",
        [
          Validators.required,
          Validators.email,
          EmailValidationUtil.validateEmailDomain,
        ],
      ],
      nombre: ["", Validators.required],
      pais: [""],
    });
  }

  loadCountries() {
    setTimeout(() => {
      this.countryService.getCountries().subscribe(
        (countries) => {
          console.log("countries", countries);
          this.processResponse(countries);
        },
        (err) => {
          console.log("err", err);
          if (err && err.status == 0) {
            //in case of CORS policy load local data with the same format
            let res = this.countryService.getTempRes();
            this.processResponse(res);
          }
        }
      );
    }, 100);
  }

  processResponse(res: any) {
    console.log("res", res);
    if (res && res["status-code"] == 200) {
      this.countries = this.getParsedCountries(res);
      console.log("countries", this.countries);
    }
  }

  getParsedCountries(res: any) {
    const arr = [];
    const data = res.data;
    for (var key in data) {
      arr.push(data[key].country);
    }
    return arr;
  }

  setDateLimitations() {
    let currentDate = new Date();
    this.minDate = TimeUtil.addMonths(currentDate, -this.minMonths);
    this.maxDate = TimeUtil.addDays(currentDate, this.maxDays);
  }

  send(form: FormGroup) {
    const data = form.value;
    console.log("dashboard-form-data", data);
  }
}
