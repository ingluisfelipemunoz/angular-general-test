import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  public showAlert(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
