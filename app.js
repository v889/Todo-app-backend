import express  from "express";
import taskRouter from "./routes/task.js";
import router from "./routes/user.js";
import {config} from "dotenv";
import cookieParser from "cookie-parser";


export const app=express();
app.use(express.json())
app.use(cookieParser())

//using rotes
app.use("/api/v1/users",router);
app.use("/api/v1/task",taskRouter);
config(
    {
        path:"./data/config.env"
    }
)


app.get("/",(req,res)=>{
    res.send("Nice working")
}) 


