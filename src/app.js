import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

import productRoute from "./routes/product.Routes.js"
import inventoryRoute from "./routes/inventory.Routes.js"
app.use("/api/v1/product", productRoute);
app.use("/api/v1/inventory", inventoryRoute);

export { app };