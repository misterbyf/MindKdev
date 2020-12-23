const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");
const getRoutes = require("./router/get.js");
const postRoutes = require("./router/post.js");
const putRoutes = require("./router/put.js");
const deleteRoutes = require("./router/delete.js");
const dbConfig = require("./config/develop.config");
const mongoose = require("mongoose");

const app = express();
const PORT = config.get("port") || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/get", getRoutes);
app.use("/post", postRoutes);
app.use("/put", putRoutes);
app.use("/delete", deleteRoutes);

// Error handling

app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("Something broke!");
});

app.use((req, res) => {
  res.status(404).send("Not Found");
})

async function start() {
  try {
    await mongoose.connect(dbConfig.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }).then(() => {
      console.log("Successfully conected to database");
    }).catch(err => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
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





