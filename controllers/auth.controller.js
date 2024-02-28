const  User = require("../models/user.model")

exports.getSignup = (req, res, next) => {
  res.render("customer/auth/signup");
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const confirmEmail = req.body.confirmEmail;
  const password = req.body.password;
  const fullname = req.body.fullname;
  const street = req.body.street;
  const postalCode = req.body.postalCode;
  const city = req.body.city

  const user = new User(email, password, fullname, street, postalCode, city)

  user.signup().then(user => {
    res.redirect("/login")
  })

};

exports.getLogin = (req, res, next) => {
  res.render("customer/auth/login");
};

exports.postLogin = (req, res, next) => {};
