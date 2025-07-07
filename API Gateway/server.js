const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use(
  "/api/auth",
  proxy("http://localhost:3000", {
    proxyReqPathResolver: (req) => req.originalUrl.replace(/^\/api/, ""),
  })
);

app.listen(3001, () => {
  console.log("🌐  API Gateway sur http://localhost:3001");
});
