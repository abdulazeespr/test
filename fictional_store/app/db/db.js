import mongoose, { Schema } from "mongoose";

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

const Books = mongoose.model("Books", bookSchema);
const Users = mongoose.model("Users", userSchema);

export { Books, Users };
