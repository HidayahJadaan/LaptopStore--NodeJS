const fs = require("fs");
const http = require("http");
const url = require("url");

const jsonData = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(jsonData);

// console.log(laptopData);

// 1. Create Server
const server = http.createServer((req, res) => {
  // This Callback function runs each time as someone accesses our web server
  // and this response has a header (status code, format for the content type)
  console.log("Someone did access the server");

  //   true--> to make sure that the query in the req object is parsed into an object
  const pathName = url.parse(req.url, true).pathname;
  // console.log(pathName);
  //   const query = url.parse(req.url, true).query;
  const id = url.parse(req.url, true).query.id;

  if (pathName === "/product" || pathName === "/") {
    // Send response back to the server
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end("Welcome in product page");
  } else if (pathName === "/laptop" && id< laptopData.length) {
    // Send response back to the server
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(`Welcome in laptop page fpr laptop ${id}`);
  } else {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end("404 NOT FOUND IN THE SERVER!!!");
  }
});

// 2. Keep Listening for the server on a certain port
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 3. Create a route for the server(Responed in diferent ways for different URLs)
// ==> DO IT IN THE SERVER CALLBACK FUNCTION
