import express from "express";
import cookieParser from "cookie-parser";

const app = express();

//Middlewares
app.use(express.json({limit:"16kb"})); // limit the json data
app.use(express.urlencoded({limit:"16kb"})); // limit the data from URL 
app.use(cookieParser());
app.use(express.static("public"));
export {app};


