const ProductController = require('../controllers/product.controller');  //Import the code from Code Block 1
module.exports = app => {
    app.get('/api/products', ProductController.allProducts);
    app.post('/api/products', ProductController.createNewProduct);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}