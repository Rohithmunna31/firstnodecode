const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "userInput.txt");
const requestHandler = (req, res) => {
  const url = req.url;
  if (req.method === "GET") {
    // Display the form for user input
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>User Input</h1>");
    res.write('<form method="POST" action="/">');
    res.write(
      '<input type="text" name="userInput" placeholder="Enter your input" />'
    );
    res.write('<input type="submit" value="Submit" />');
    res.write("</form>");

    // Read and display the previously stored input
    fs.readFile(filePath, "utf8", (err, data) => {
      if (!err) {
        res.write(`<p>  ${data || "No input yet"}</p>`);
      }
      res.end();
    });
  } else if (req.method === "POST") {
    // Handle form submission
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const userInput = decodeURI(body).split("=")[1]; // Extract user input

      // Write user input to the file
      fs.writeFile(filePath, userInput, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }
        res.writeHead(302, { Location: "/" }); // Redirect to GET request for the same page
        res.end();
      });
    });
  }
};

exports.handler = requestHandler;
exports.sometext = 'This is some hard coded text';
