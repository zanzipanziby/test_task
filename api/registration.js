const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // Для поддержки JSON-encoded тел запросов

app.post("/api/registration", (req, res) => {
  if (Math.random() > 0.5) {
    res.statusCode = 400;

    setTimeout(() => {
      res.send({
        "status": "error",
        "fields": {
          "email": "This email address is already registered",
          "phone": "This phone address is already registered"
        }
      });
    }, Math.random() * 1000);

    return;
  }

  setTimeout(() => {
    res.statusCode = 200;
    res.send({
      status: "success",
      message: "You are registered"
    });
  }, Math.random() * 1000);
});

module.exports = app;