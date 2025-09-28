import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

import productRoute from "./routes/product.Routes.js"
app.use("/api/v1/product", productRoute);

export { app };