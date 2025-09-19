
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path: './env'}
);

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app running on http://localhost${process.env.PORT}`);
    })
})
.catch((error)=>{
console.log('mongo db connection failed', error)
})

























// import mongoose from "mongoose";
// import express from "express";
// import dotenv from "dotenv";
// import { DB_NAME } from "./constants.js";

// dotenv.config();

// const app = express();

// (async () => {
//   try {
//     console.log("MONGODB_URI:", process.env.MONGODB_URI); // debug
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority`);
//     console.log("✅ Database connected");

//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`🚀 Server running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("❌ Database connection failed:", error);
//     process.exit(1);
//   }
// })();
