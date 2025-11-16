    const express = require('express')
    require ('dotenv').config()
    const mongoose=require('mongoose')
    const app=express()
    const ProductRouter=require('./router/FabricRouter')

    // app.get('/', (req, res)=>{
    //     res.send('Hello Selvakumar you are a Fullstack Developer')
    // })

    app.use(express.json())

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
        console.log("DB, Server is Runing " + process.env.PORT);
    })
    })
    .catch((error)=>console.log('Database Not Connect'))    

    app.use("/api/Fabrics", ProductRouter)