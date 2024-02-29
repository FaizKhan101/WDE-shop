const express = require("express");
const csrf = require("csurf")
const expressSession = require("express-session")

const baseRoutes = require("./routes/base.routes")
const productsRoutes = require("./routes/products.routes")
const authRoutes = require("./routes/auth.routes");
const db = require("./data/database");
const addCsrfTokenMiddleware = require("./middlewares/csrf-token")
const errorHandlerMiddleware = require("./middlewares/error-handler")
const sessionConfig = require("./config/session")

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"));

app.use(expressSession(sessionConfig()))

app.use(csrf())

app.use(addCsrfTokenMiddleware.addCarfToken)

app.use(baseRoutes)
app.use(authRoutes);
app.use(productsRoutes)

app.use(errorHandlerMiddleware.errorHandler)

db.connectToDb()
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
