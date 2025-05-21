const express = require("express");
const app = express();
const path = require("path");

const connectdb = require("./config/db-connection");
const cookieParser = require("cookie-parser");

connectdb();

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.use("/ez-coomerce/home", require("./routs/home-router"));
app.use("/ez-coomerce/product", require("./routs/product-router"));
app.use("/ez-coomerce/login", require("./routs/login-router"));
app.use("/ez-coomerce/checkout", require("./routs/checkout-router"));
app.use("/ez-coomerce/admin", require("./routs/admin-router"));

app.listen(3000);
