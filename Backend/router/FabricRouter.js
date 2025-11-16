const express=require('express')

const router=express.Router()

const {createProduct, GetProduct, GetSingleProduct, updateProduct, DeleteProduct} = require('../controllers/FabricsController')

router.post('/', createProduct)

router.get('/allFabrics', GetProduct)

router.get('/:id', GetSingleProduct)

router.patch('/:id', updateProduct)

router.delete('/:id', DeleteProduct)

module.exports=router