{
  const urlParse = (url) => {
    let chunks = url.split("?")[1].split("&");
    // let obj = {};
    let parseObj = new Map();

    for (let i = 0; i < chunks.length; i++) {
      let parts = chunks[i].split("=");
      let key = parts[0];
      let value = parts[1];

      if (!parseObj.has(key)) {
        parseObj.set(key, []);
      }

      parseObj.get(key).push(value);
      // if (typeof obj[key] === "undefined") {
      //   obj[key] = value;
      // } else if (Array.isArray(obj[key])) {
      //   obj[key].push(value);
      // } else {
      //   obj[key] = [obj[key], value];
      // }
    }

    // console.log(parseObj.get("b").length);
    // return obj;
    return parseObj;
  };

  const url =
    "https://www.goog.com/start?search=test&a=zzz&b=yyy&c=xxx&b=333&b=result";

  console.log(urlParse(url));
}
