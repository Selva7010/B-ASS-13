const mongoose=require('mongoose')

const Schema=mongoose.Schema

const FabricSchema=new Schema({
    ProductName: {
        type:String,
        require:true,
    },
    Quantity: {
        type:Number,
        require:true,
    },
    Price:{
        type:Number,
    },
    Description:{
        type:String
    }
})

module.exports=mongoose.model("Fabrics", FabricSchema)