const asynchandler = require("express-async-handler");
const user_model = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const rander = asynchandler(async (req, res) => {
  res.render("login.ejs");
});

const sing_in = asynchandler(async (req, res) => {
  try {
    let username = req.body.sing_name;
    let email = req.body.sing_email;
    let password = req.body.sing_password;
    let user = await user_model.findOne({ email: email });
    if (!user) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) return res.send(err.message);
          else {
            let user = await user_model.create({
              username,
              email,
              password: hash,
              isadmin: false,
            });
          }
        });
      });
      console.log(username);
      res.redirect("/ez-coomerce/login");
    } else {
      console.log("user exist");
      res.redirect("/ez-coomerce/login");
    }
  } catch (err) {
    console.log(err.message);
  }
});

const login = asynchandler(async (req, res) => {
  let email = req.body.login_email;
  let password = req.body.login_password;
  let user = await user_model.findOne({ email: email });
  if (!user) {
    console.log("email is wrong");
    res.redirect("/ez-coomerce/login");
  } else {
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        let token = jwt.sign({ email, id: user._id }, "secret", {
          expiresIn: "1m",
        });
        res.cookie("token", token);
        console.log("user loggedin");
        res.redirect("/ez-coomerce/home");
      } else {
        console.log("password is wrong");
        res.redirect("/ez-coomerce/login");
      }
    });
  }
});

module.exports = { rander, sing_in, login };
