import { FormControl } from "@angular/forms";
import { INVALID_EMAILS } from "../data/invalid_emails";

export class EmailValidationUtil {
  public static validateEmailDomain(control: FormControl) {
    let email: string = control.value || "";
    let domain = EmailValidationUtil.getDomain(email);
    return INVALID_EMAILS.includes(domain) ? { valid: false } : null;
  }

  private static getDomain(email: string) {
    return email.substring(email.indexOf("@"), email.length);
  }
}
