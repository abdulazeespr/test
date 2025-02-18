const jwt = require("jsonwebtoken");

const AuthMiddleWare = (req, res, next) => {
  const jwtToken = req.headers.authorization;
  try {
    const verifyed = jwt.verify(JSON.parse(jwtToken), process.env.JWT_SCERET);

    if (verifyed) {
      req.userId = verifyed.userId;
      next();
    } else {
      res.json({
        message: "You are Not Login",
      });
      return;
    }
  } catch (e) {
    console.log(e);
    res.json({
      message: "Invaild Token",
    });
  }
};

module.exports = AuthMiddleWare;
