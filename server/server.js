// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';
import userRoutes from './routes/users.js';


//express app
const app = express();
const PORT = 5000;

//middleware

app.use(cors());
app.use(express.json());

app.use((req,res,next) => {
  console.log(req.path, req.method);
  next();
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose connection event

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define routes and middleware here
app.use('/api/users', userRoutes);

// running the code at port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});