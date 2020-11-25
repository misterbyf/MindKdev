let express = require("express");
let config = require("config");
let app = express();

const PORT = config.get("port") || 8080;

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

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}!`);
});