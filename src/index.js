import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({path:"./.env"});
// dotenv.config();

connectDB();





















// import mongoose from 'mongoose';
// import express from 'express';
// import { DB_NAME } from './constants';

// const db_url = process.env.MONGODB_URI;
// const port = process.env.PORT;
// const app = express();

// (async ()=>{
//     try {
//         await mongoose.connect(`${db_url}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("ERROR ! ",error);
//             throw error;
//         })
//         app.listen(port,()=>{
//             console.log(`App listening on the port ${port}`);
//         })
//     } catch (error) {
//         console.error("ERROR ! ",error);
//         throw error;
//     }
// })()
