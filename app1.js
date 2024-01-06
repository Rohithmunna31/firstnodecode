const express = require("express");
const parser = require("body-parser");

const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin.js");

const shopRoutes = require("./routes/shop.js");

const errRoutes = require("./routes/404.js");

const contactRoutes = require("./routes/contact.js");

const successRoutes = require("./routes/success.js");

app.use(parser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use(errRoutes);

app.listen(3000);
