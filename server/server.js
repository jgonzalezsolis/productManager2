const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
// require('./routes/product.routes')(app);   // We're importing the routes export. 
require('./config/mongoose.config');    /* This is new */
    

app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
app.use(cors());
const AllMyProductRoutes = require("./routes/product.routes");
AllMyProductRoutes(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );


    




