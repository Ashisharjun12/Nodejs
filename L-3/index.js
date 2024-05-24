const http = require("http");
const fs = require("fs");
const url = require('url')

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}  ${req.url}: new req recieved\n`;
  console.log("new req receive");
  const myurl = url.parse(req.url ,true)
  console.log(myurl)
  fs.appendFile("log.txt", log, (err, data) => {
    if (err) console.log(err);
    else {
      switch (myurl.pathname) {
        case "/":
          res.end("hello homepage");
          break;

        case "/about":
            const user = myurl.query.myname
          res.end(`hello , ${user}`);
          break;

        default:
          res.end("404 not found");
      }
    }
  });
});

myserver.listen(9000, () => {
  console.log("server is running at : 9000");
});
