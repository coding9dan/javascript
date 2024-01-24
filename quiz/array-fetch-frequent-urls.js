{
  const fetch = require("isomorphic-fetch");

  // async/await
  const getFetchUrl = async (url) => {
    const res = await fetch(url);
    const results = await res.text();
    // console.log(results);

    return results.split("\n").reduce((accUrl, curUrl) => {
      let maxCount = 0;
      let maxUrl = "";

      if (accUrl[curUrl]) {
        accUrl[curUrl]++;
      } else {
        accUrl[curUrl] = 1;
      }

      if (accUrl[curUrl] > maxCount) {
        maxCount = accUrl[curUrl];
        maxUrl = curUrl;
      } else if (accUrl[curUrl] === maxCount) {
        maxUrl += curUrl;
      }

      return accUrl;
    }, []);
  };
  const getMostUrl = getFetchUrl("https://coding9dan.github.io/api/urls.txt");
  getMostUrl.then((data) => console.log(data));

  // fetch
  // fetch("https://coding9dan.github.io/api/urls.txt")
  //   .then((resp) => {
  //     return resp.text();
  //   })
  //   .then((txt) =>
  //     txt.split("\n").reduce((accUrl, curUrl) => {
  //       let maxCount = 0;
  //       let maxUrl = "";
  //       if (accUrl[curUrl]) {
  //         accUrl[curUrl]++;
  //       } else {
  //         accUrl[curUrl] = 1;
  //       }

  //       if (accUrl[curUrl] > maxCount) {
  //         maxCount = accUrl[curUrl];
  //         maxUrl = curUrl;
  //       } else if (accUrl[curUrl] === maxCount) {
  //         maxUrl += curUrl;
  //       }

  //       return accUrl;
  //     }, [])
  //   )
  //   .then((data) => console.log(data));
}
