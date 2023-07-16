// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import userRoutes from "./routes/users.js";
import morgan from "morgan";
import connectDB from "./config/connectDb.js";
import transactionsRoutes from "./routes/transactions.js";


//express app
const app = express();
const PORT_SERVER = process.env.PORT;

//middleware

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// DB Call

connectDB();

// Define routes

  // User route

app.use("/api/users", userRoutes);

  // Transaction route 

app.use("/api/transactions", transactionsRoutes);

// Static Files

// app.use(express.static(path.join(__dirname, "../Client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// running the code at port

app.listen(PORT_SERVER, () => {
  console.log(`Server is running on port ${PORT_SERVER}`);
});
