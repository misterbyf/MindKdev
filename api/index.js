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
  if (req.params.name == "Bogdan") {
    res.send(`Hello ${req.params.name}!`);
  } else {
    next(new Error("Not valid name"));
  }

});

// Error handling

app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something broke!');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
})

