const express = require("express");
const app = express();
const proxy = require("express-http-proxy");

app.use("/api/auth", proxy("http://localhost:3000"));

app.listen(3001, () => {
  console.log("API Gateway en cours d'exécution sur le port 3001");
});
