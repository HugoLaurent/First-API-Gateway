require("dotenv").config(); // charge .env
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Connecté à:", mongoose.connection.db.databaseName);

    const app = express();
    app.use(express.json());

    app.use("/api/auth", authRoutes);
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
