const { default: mongoose } = require('mongoose')
const fabricModel=require('../models/Fabrics')

// Create Product

const createProduct = async(req, res)=>{
    const {ProductName, Quantity, Price} = req.body

    try{
        const product=await fabricModel.create({ProductName, Quantity, Price})
        res.status(200).json(product)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
    }

// Get Product

const GetProduct = async(req,res)=>{
    try{
        const productget=await fabricModel.find({})
        res.status(200).json(productget)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

// Get Single Tasks

const GetSingleProduct=async(req, res)=>{
const {id}=req.params

if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({message:'Invalid Id'})
}

try{
    const singleProduct=await fabricModel.findById(id)
    res.status(200).json(singleProduct)
}
catch(error){
    res.status(400).json({error:error.message})
}
}

// Update Product

const updateProduct=async (req, res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message:'Invalid Id'})
    }

    try{
        const product=await fabricModel.findByIdAndUpdate(
            {
                _id:id
            },
            {
                ...req.body
            }
        )
        res.status(200).json(product)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

// Delete Product

const DeleteProduct=async (req,res) =>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message:'Invalid Id'})
    }
    try{
        const product=await fabricModel.findByIdAndDelete(id)
        res.status(200).json(product)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

module.exports={createProduct, GetProduct, GetSingleProduct, updateProduct, DeleteProduct}