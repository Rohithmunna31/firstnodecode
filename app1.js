const express = require("express");
const parser = require("body-parser");

const app = express();

app.use(parser.urlencoded({ extended: false }));

app.use("/addproduct", (req, res, next) => {
  console.log("this is add product page ");
  res.send(
    "<form action='/product' method='POST'> <input type='text' name='title'> <input type='number' name='no of'><button type='submit'> Add Product </button> </form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res) => {
  console.log("this is another middleware");
  res.send("<h1> Hai this is from express </h1>");
});

app.listen(4000);
