export class DataParserUtil {
  public static arrayToObj(arr: any[]) {
    console.log("valling thgis");
    console.log("arr", arr);
    let obj = {};
    arr.map((x) => {
      obj[x.name] = x.value;
    });
    console.log("result", obj);
    return obj;
  }

  public static objToArray(obj: any) {
    console.log("valling thgis");
    let arr: any[] = [];
    for (var key in obj) {
      arr.push({ name: key, value: obj[key] });
    }
    return arr;
  }
}
