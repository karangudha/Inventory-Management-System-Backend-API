import dotenv from "dotenv";
import { app } from "./app.js"
import connectDB from "../config/database.js";
import { error } from "console";

dotenv.config();

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERR ", error);
        throw error;
    })
})
.then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Sever is running at ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGODB connection failed ", err);
})


