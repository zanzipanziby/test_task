const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/ping', (req, res) => {
  res.statusCode = 200;
  res.send({
    status: "success",
    message: "Server is ready",
  });
});

module.exports = app;
