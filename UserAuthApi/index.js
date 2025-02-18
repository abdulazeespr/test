const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("./db");
const bcrypt = require("bcrypt");
const AuthMiddleWare = require("./middleWare");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
console.log(process.env.MONOGODB_URL);

const PORT = process.env.PORT | 3000;
//user Registration

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const User = await UserModel.findOne({
      username: username,
    });

    if (User) {
      res.status(403).json({
        message: "Username is already taken",
      });

      return;
    }
    const hashPassword = await bcrypt.hash(password, 7);

    await UserModel.create({
      username: username,
      password: hashPassword,
    });

    res.status(200).json({
      message: "User is Signup",
    });
    return;
  } catch (e) {
    res.status(200).json({
      message: "Server error",
    });
    return;
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const User = await UserModel.findOne({
      username,
    });

    if (!User) {
      res.status(403).json({
        message: "User is Not Register,Create a Account",
      });
      return;
    }

    const hash = User.password;

    const hashPass = await bcrypt.compare(password, hash);

    if (!hashPass) {
      res.status(403).json({
        message: "The Password is Not Correct",
      });
    } else {
      const jwtToken = jwt.sign(
        {
          userId: User._id,
        },
        process.env.JWT_SCERET
      );

      res.json({
        message: "Success",
        token: jwtToken,
      });
      return;
    }
  } catch (e) {
    res.json({
      message: "Server Error",
    });
    return;
  }
});

app.get("/user", AuthMiddleWare, async (req, res) => {
  try {
    const User = await UserModel.findById({
      _id: req.userId,
    });

    res.status(200).json({
      username: User.username,
    });
  } catch (e) {
    res.status(500).json({
      message: "Server down",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
