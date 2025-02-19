import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.NEXT_MONOGODB_URL)
  .then(() => console.log("Connected!"));

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  userEmail: { type: String, required: true },
});

const userSchema = new Schema({
  username: { type: String, required: true },
  userEmail: { type: String, required: true },
});

const Books = mongoose.models.Books || mongoose.model("Books", bookSchema);
const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export { Books, Users };
