// Import User model
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";

// Create Token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
};

// Login User callback
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // we are calling the static method login from the User model
    // and we are passing the parameters
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// SignUp User callback
const signupUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    // we are calling the static method signup from the User model
    // and we are passing the parameters
    const user = await User.signup(firstname, lastname, email, password);

    //create a token
    const token = createToken(user._id);

    res.status(201).json({ email, user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signupUser, loginUser };
