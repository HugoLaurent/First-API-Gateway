const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator, {
  message: "{PATH} `{VALUE}` est déjà utilisé.",
});

module.exports = mongoose.model("User", userSchema);
