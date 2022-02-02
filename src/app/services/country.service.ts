import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PathsEnum } from "../common/enums/paths.enum";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  constructor(private http: HttpClient) {}

  public getCountries() {
    return this.http.get(
      environment.countries_api + PathsEnum.GET_COUNTRIES_LIST
    );
  }

  public getTempRes() {
    return {
      status: "OK",
      "status-code": 200,
      version: "1.0",
      access: "public",
      data: {
        DZ: {
          country: "Algeria",
          region: "Africa",
        },
        AO: {
          country: "Angola",
          region: "Africa",
        },
        BJ: {
          country: "Benin",
          region: "Africa",
        },
        BW: {
          country: "Botswana",
          region: "Africa",
        },
        BF: {
          country: "Burkina Faso",
          region: "Africa",
        },
        BI: {
          country: "Burundi",
          region: "Africa",
        },
        CV: {
          country: "Cabo Verde",
          region: "Africa",
        },
        CM: {
          country: "Cameroon",
          region: "Africa",
        },
        CF: {
          country: "Central African Republic (the)",
          region: "Africa",
        },
        TD: {
          country: "Chad",
          region: "Africa",
        },
      },
    };
  }
}
