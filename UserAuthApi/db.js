const monogoose = require("mongoose");

monogoose.connect(process.env.MONOGODB_URL);

const userSchema = new monogoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const UserModel = monogoose.model("User", userSchema);

module.exports = UserModel;
