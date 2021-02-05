const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const passport = require("passport");

const userRoutes = require("./router/user.router.js");
const authRouter = require("./router/auth.router");


const app = express();
const PORT = config.get("port") || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRouter);
app.use("/api", userRoutes);

app.use(passport.initialize());
require("./middleware/passport")(passport);

// Error handling

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("Something broke!");
  next();
}, ((req, res) => {
  res.status(404).send("Not Found");
}));


async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}`);
    });
  } catch (e) {
    /**
     * Вывод ошибки и выход
     */
    console.log("Server message: ", e.message);
    process.exit(1);
  }
}

start();





