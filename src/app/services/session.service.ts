import { Injectable } from "@angular/core";
import { ConstsEnums } from "../common/enums/consts.enum";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor() {}

  setCurrentSession(session: any) {
    localStorage.setItem(ConstsEnums.CURRENT_SESSION, JSON.stringify(session));
  }
  getCurrentSession() {
    return JSON.parse(localStorage.getItem(ConstsEnums.CURRENT_SESSION));
  }
}
