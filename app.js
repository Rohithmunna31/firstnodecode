const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> This is title </title></head>");
    res.write(
      '<body><form action="/" method="POST"> <input type="text" name="message"> <button type="submit"> Send</button> </form></body>'
    );
    return;
  }
  if (url === "/" && method === "GET") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      res.write(`<p>  ${message} || "No input yet"</p>`);

      fs.writeFileSync("message.txt", message, () => {
        res.statusCode = "302";
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
