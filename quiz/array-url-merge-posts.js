{
  let api_get = function (url) {
    switch (url) {
      case "http://api.feedonomics.com/api.php/users/120/posts":
      case "http://api.feedonomics.com/api.php/users/120/posts?page_token=":
        return '{"data":["post1","post2","post3"],"next_page_token": "aafrg347a8fghr4is34ahe7risw8ruibc"}';

      case "http://api.feedonomics.com/api.php/users/120/posts?page_token=aafrg347a8fghr4is34ahe7risw8ruibc":
        return '{"data":["post4","post5","post6"],"next_page_token": "vt2qcnqhtvyvff8zdwpd3mqqatx3sk"}';

      case "http://api.feedonomics.com/api.php/users/120/posts?page_token=vt2qcnqhtvyvff8zdwpd3mqqatx3sk":
        return '{"data":["post7","post8"],"next_page_token": ""}';

      default:
        console.error("error detected fetching URL " + url);
        break;
    }
  };

  function getPosts() {
    // console.log('type1: ', typeof {"data": []});
    // console.log('type2: ', typeof '{"data": []}');

    const BASE_URL =
      "http://api.feedonomics.com/api.php/users/120/posts?page_token=";

    let nextToken;
    let posts = [];

    do {
      let url = BASE_URL;
      if (nextToken) {
        url += nextToken;
      }

      const data = JSON.parse(api_get(url));

      if (data.data) {
        posts.push(...data.data);
      }

      nextToken = data.next_page_token;
    } while (nextToken);

    return posts;
  }

  console.log(getPosts());
}
