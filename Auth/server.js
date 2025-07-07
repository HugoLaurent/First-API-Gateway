require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const { register } = require("./controller/registerController");
const { login } = require("./controller/loginController");

async function start() {
  try {
    await connectDB();

    const app = express();
    app.use(express.json());

    app.post("/auth/register", register);
    app.post("/auth/login", login);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () =>
      console.log(`🚀  Auth service en écoute sur http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("❌  Impossible de se connecter à MongoDB :", err.message);
    process.exit(1);
  }
}

start();
