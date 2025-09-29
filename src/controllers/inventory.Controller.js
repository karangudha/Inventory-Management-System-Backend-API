import { Product } from "../models/product.Model.js";
import { ApiError } from "../utils/appError.js";


const increaseQuantity = async(req, res) => {
    const { name, quantity } = req.body;

    if(!(name && quantity))
        throw new ApiError(404, "Details required!!");

    const product = await Product.findOne({name});
    if(!product)
        throw new ApiError(400, "Product not found, Add product");

    const updatedQuantity = await Product.updateOne(
        {
            _id: product._id,
        },
        {
            $inc: {
                stockQuantity: quantity
            }
        }
    )
    if(!updatedQuantity)
        throw new ApiError(500, "Quantity not upadated!!");

    res.status(200).json({message: "stock upadetd successfylly", quantity: updatedQuantity});
}

const decreaseQuantity = async(req, res) => {
    const { name, quantity } = req.body;
    if(!(name && quantity))
        throw new ApiError(404, "Field required!!")
    const product = await Product.findOne(
        {
            name
        },
        {
            stockQuantity: 1
        }
    )
    if(!product)
        throw new ApiError(404, "Product not found!! ");
    else if(product.stockQuantity < quantity)
        throw new ApiError(400, "Stock is insufficient!!");

    const updateStock = await Product.updateOne(
        {
            name
        },
        {
            $inc: {
                stockQuantity: -quantity
            }
        }
    )
    if(!updateStock)
        throw new ApiError(500, "Stock not updated!!");
    res.status(200).json({message: "test", updateStock});
}

const lowStockProduct = async(req, res) => {
    const quantity = Number(req.query.quantity);
    const listStock = await Product.find(
        {
            stockQuantity: {
                $lt : quantity
            }
        },
        {
            name: 1,
            stockQuantity: 1
        }
    ).lean();
    res.status(200).json({ message: "Stock list fetch successfuly", products: listStock});
}

const getAllProduct = async(req, res) => {
    const listProduct = await Product.find({});
    if(!listProduct)
        throw new ApiError(500, "Cant fetch product!!");
    res.status(200).json({message: "All product fetch successfully", product: listProduct});
}

export { increaseQuantity, decreaseQuantity , lowStockProduct, getAllProduct};

    