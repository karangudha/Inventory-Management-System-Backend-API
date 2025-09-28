import { Product } from "../models/product.Model.js";
import { ApiError } from "../utils/appError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const productAddAndUpdate = async(req, res) => {
    const { name, description, stockQuantity } = req.body;
    if(!(name && description && stockQuantity))
        throw new ApiError(400, "Required all details");

    const alreadyExist = await Product.findOneAndUpdate(
        { 
            name 
        },
        {
            $set: {
                stockQuantity: stockQuantity
            }
        }
    );
    if(!alreadyExist)
    {
        const product = await Product.create({
            name,
            description,
            stockQuantity
        })
    
        if(!product)
            throw new ApiError(500, "Failed to create product");
    }

    const product = await Product.findOne({name});

    res.status(200).json({
         message: `Product created`,
         product: product
        })
};

const productDelete = async(req, res) => {
    const { name } = req.body;
    try {
        if(!name)
            throw new ApiError(400, "Name of product required!!")
        const isProduct = await Product.findOne({name});
        if(!isProduct)
            throw new ApiError(404, "Prodcut not Exist!!");
        await Product.deleteOne(isProduct._id);
    
        const product = await Product.findOne({name});
        if(product)
            throw new ApiError(500, "Product not deleted");
        res.status(200).json({ message: `Product deleted`});
    } catch (error) {
        throw new ApiError(500, "Something went wrong!!");
    }
}

const productGet = async(req, res) => {
    const { name } = req.body;
    if(!name)
        throw new ApiError(400, "Name required!!");

    const product = await Product.findOne({ name });
    if(!product)
        throw new ApiError(404, "Product not found!!");

    res.status(200).json({
        message: "Product fetch succesfully!!",
        product: product
    })
}
export { productAddAndUpdate, productDelete, productGet };