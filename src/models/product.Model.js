import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        description: {
            type: String,
            required: true
        },
        stockQuantity: {
            type: Number,
            required: true,
            index: true
        }
    },
    {
        timestamps: true
    }
);
export const Product = mongoose.model("Product", productSchema);