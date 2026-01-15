import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

//Middlewares
app.use(express.json({limit:"16kb"})); // limit the json data
app.use(express.urlencoded({limit:"16kb"})); // limit the data from URL
app.use(cookieParser());
app.use(express.static("public"));
app.use(cors());

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users",userRouter);

export {app};


