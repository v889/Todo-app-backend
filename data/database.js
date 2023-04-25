import mongoose from "mongoose";

export const connectdb=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        "dbname":"TodoApi",
     })
     .then(()=>console.log("Database Conneted"))
     .catch((e)=>console.log(e));
    
};