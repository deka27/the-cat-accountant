import mongoose from "mongoose";
import dotenv from 'dotenv/config';

const connectDB = async () => {
     try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }

}

export default connectDB;