exports.getSignup = (req, res, next) => {
  res.render("customer/auth/signup");
};

exports.postSignup = (req, res, next) => {};

exports.getLogin = (req, res, next) => {
  res.render("customer/auth/login");
};

exports.postLogin = (req, res, next) => {};
