const express = require("express")

const authRoutes = require("./routes/auth.routes")

const app = express()

app.set("view engine", "ejs")
app.set("views", "views")

app.use(authRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

