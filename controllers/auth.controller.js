exports.getSignup = (req, res, next) => {
  res.render("auth/signup");
};

exports.postSignup = (req, res, next) => {};

exports.getLogin = (req, res, next) => {
  res.render("auth/login");
};

exports.postLogin = (req, res, next) => {};
