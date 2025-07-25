const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async (req, res) => {
  const { nom, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 12);

    await User.create({ nom, email, password: hash });

    res.status(201).json({ message: "Compte créé avec succès" });
  } catch (err) {
    res.status(400).json(err.errors.email.message);
  }
};
