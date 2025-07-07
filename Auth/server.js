require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const auth = require("./routes/auth");

async function start() {
  try {
    await connectDB();

    const app = express();
    app.use(express.json());

    app.use("/auth", auth);

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
