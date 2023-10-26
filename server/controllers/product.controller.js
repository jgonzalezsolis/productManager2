const Product = require('../models/product.model');

module.exports ={
    allProducts: (req,res) => {
        Product.find({})
            .then((products)=>{
                console.log(products);
                res.status(200).json(products);
            })
            .catch(err=>{
                res.status(500).json({message: 'Error in controllers for find all products',error: err})
            })
    },
    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id })
            .then((oneproduct)=>{
                console.log(oneproduct)
                res.status(200).json(oneproduct)
            })
            .catch((err)=>{
                res.status(500).json({message: 'error in the controllers for find one product', error: err})
            })
    },
    createNewProduct: (req, res) => {
        Product.create(req.body)
        .then(newProduct=>{
            console.log(newProduct)
            res.status(200).json( newProduct)
        })
        .catch(err=>{
            res.status(500).json({message: 'error in the controllers for create new product', error: err})
        })
    },
    updateProduct: (req, res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id }, 
            req.body,
            {new: true, runValidators: true}
            )
            .then(updatedProduct => {
                console.log(updatedProduct)
                res.status(200).json( updatedProduct)
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong in update controllers', error: err})
            })
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(deleted => {
                res.status(200).json(deleted)
            })
            .catch(err => {
                res.status(500).json({message: 'Something went wrong in delete controllers', error: err})
            })
    }
}

