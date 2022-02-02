export class TimeUtil {
  public static addMonths(date, months) {
    var result = new Date(date),
      expectedMonth = (((date.getMonth() + months) % 12) + 12) % 12;
    result.setMonth(result.getMonth() + months);
    if (result.getMonth() !== expectedMonth) {
      result.setDate(0);
    }
    return result;
  }

  public static addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
