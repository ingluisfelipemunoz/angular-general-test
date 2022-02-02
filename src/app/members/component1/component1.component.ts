import { Component, OnInit } from "@angular/core";
import { ResultCases } from "src/app/common/enums/result-cases.enum";
import { DataParserUtil } from "src/app/common/utils/data-parser.util";

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.css"],
})
export class Component1Component implements OnInit {
  DATA1 = [
    { value: 1, name: "CampoUno" },
    { value: 2, name: "CampoDos" },
    { value: 3, name: "CampoTres" },
    { value: 4, name: "CampoCuatro" },
    { value: 5, name: "CampoCinco" },
    { value: 6, name: "CampoSeis" },
  ];
  DATA2 = [
    { value: 21, name: "a" },
    { value: 20, name: "b" },
    { value: 19, name: "c" },
    { value: 18, name: "d" },
    { value: 17, name: "e" },
    { value: 16, name: "f" },
  ];

  REVERSE_DATA = {
    CampoUno: 1,
    CampoDos: 2,
    CampoTres: 3,
    CampoCuatro: 4,
    CampoCinco: 5,
    CampoSeis: 6,
  };
  res1: any;
  res2: any;
  res_reverse: any;
  constructor() {}

  ngOnInit() {
    this.resetResults();
  }

  resetResults() {
    this.res1 = [];
    this.res2 = [];
    this.res_reverse = [];
  }

  process(option: number) {
    console.log("option", option);
    switch (option) {
      case ResultCases.CASE1:
        this.res1 = this.generateResult(this.DATA1);
        break;
      case ResultCases.CASE2:
        this.res2 = this.generateResult(this.DATA2);
        break;
      case ResultCases.REVERSE:
        this.res_reverse = this.generateResult(this.REVERSE_DATA, true);
        break;
    }
    console.log("res1", this.res1, "res2", this.res2, "res3", this.res_reverse);
  }

  generateResult(data, inverse = false) {
    console.log("data", data);
    return !inverse
      ? DataParserUtil.arrayToObj(data)
      : DataParserUtil.objToArray(data);
  }
}
