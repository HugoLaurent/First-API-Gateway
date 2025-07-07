const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { nom, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 12);

    await User.create({ nom, email, password: hash });

    res.status(201).json({ message: "Compte créé avec succès" });
  } catch (err) {
    if (err.name === "ValidationError") {
      const message =
        Object.values(err.errors)[0]?.message || "Erreur de validation";
      return res.status(409).json({ message });
    }
    console.error("Erreur complète:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
