// Import User model
import User from "../models/userModel.js";

// Login User
const loginUser = async (req, res) => {
  res.json({ mssg: "Login User" });
};

// SignUp User
const signupUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    // we are calling the static method signup from the User model
    // and we are passing the parameters

    const user = await User.signup(firstname, lastname, email, password);

    res.status(201).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signupUser, loginUser };
