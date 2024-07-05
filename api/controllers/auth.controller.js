const User = require("../models/user.model");
const { errorHandler } = require("../utils/error");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getData(req, res, next) {
  return res.status(201).json({
    messsage: "Hello",
  });
}

async function userAuthSignin(req, res, next) {
  const { email, password } = req.body;
  if (!email.trim()) return next(errorHandler(401, "Please Provide Email"));
  else if (!password.trim())
    return next(errorHandler(401, "Please Provide Password"));

  try {
    const validUser = await User.findOne({ email });
    if (!validateEmail) {
      return next(401, "User not found!");
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (validPassword) {
      return next(401, "Incorrect Password!");
    }
    const token = jwt.sign(
      {
        id: validUser._id,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "1d" }
    );
    const { password: pass, ...rest } = validUser._doc;

    return res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        message: "User Signed in successfully!",
        data: rest,
      });
  } catch (err) {
    next(err);
  }
}
async function userAuthSignup(req, res, next) {
  const { email, name, password, number } = req.body;
  if (!email) next(errorHandler(401, "Please Provide Valid Email"));
  else if (!name) next(errorHandler(401, "Please Provide Name"));
  else if (!password) next(errorHandler(401, "Please Provide Valid Password"));
  else if (!number) next(errorHandler(401, "Please Provide Valid Number"));

  const validateEmail = await User.findOne({ email });
  if (validateEmail) {
    return res.status(401).json({
      message: "Email is already taken!",
    });
  }
  const validateNumber = await User.findOne({ number });
  if (validateNumber) {
    return res.status(401, "Number is already used!");
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    number,
  });
  try {
    await newUser.save();
    return res.status(201).json({
      message: "User created successfully!",
    });
  } catch (err) {
    next(err);
  }
}
async function userAuthGoogle(req, res, next) {}

module.exports = { getData, userAuthGoogle, userAuthSignin, userAuthSignup };
