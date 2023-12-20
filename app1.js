const http = require("http");

const routes = require("./routes");

console.log(routes.sometext);

const server = http.createServer(routes.handler);

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000/");
});
