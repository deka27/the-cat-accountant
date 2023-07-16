import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

//Schema Design

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// Static Signup Method

userSchema.statics.signup = async function(firstname, lastname, email, password) {

  // Validation Check
  if (!firstname || !lastname || !email || !password) {
    throw Error("All fields are required");
  }
   // email validation
  if (!validator.isEmail(email)) {
    throw Error("Email is invalid");
  }
  // password validation
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  //first check if the email exists
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }
    //Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstname,
    lastname,
    email,
    password: hash,
  });
    // we are returning the user object
    // and we are saving it in the user variable
  return user;
};

// Static Login Method

userSchema.statics.login = async function(email, password) {
  if (!email || !password) {
    throw Error("All fields are required");
  }

  //first check if the email exists
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }
  //checking the password
  const match = await bcrypt.compare(password, user.password);
  
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;

}

//exporting the user object

const User = mongoose.model("users", userSchema);

export default User;
