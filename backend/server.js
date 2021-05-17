const path=require('path');
const fs=require('fs');
const bodyParser = require('body-parser');
const express=require('express');
const cors = require("cors");
const db = require("./models/index");


const app=express();

var corsOptions = {
    origin: "http://localhost:8080"
  };
  app.use(cors(corsOptions));

const CART_DATA_FILE=path.join(__dirname,'server-cart-data.json');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
db.sequelize.sync()

app.use((req,res,next)=>{
    res.setHeader('Cache-Contol','no-cache ,no-store, must-revalidate');
    res.setHeader('Pragma','no-cache');
    res.setHeader('Expires','0');
    next();
});

require("./routes/shoppingRoutes")(app);
require("./routes/cartRoutes")(app);


/*app.get('/cart',(req,res)=>{
    fs.readFile(CART_DATA_FILE,(err,data)=>{
        res.setHeader('Cache-Control','no-cache');
        res.json(JSON.parse(data));
    });
}), */
/*app.delete('/cart/delete/all',(req,res)=>{
    fs.readFile(CART_DATA_FILE,()=>{
        let emptyCart=[];
    fs.writeFile(CART_DATA_FILE,JSON.stringify(emptyCart,null,4),()=>{
        res.json(emptyCart);
    });
  });
}),
app.delete('/cart/delete',(req,res)=>{
    fs.readFile(CART_DATA_FILE,(err,data)=>{
        let cartProducts=JSON.parse(data);
        cartProducts.map((cartProduct)=>{
            if(cartProduct.id===req.body.id && cartProduct.quantity>1){
                cartProduct.quantity--;
            }
            else if(cartProduct.id===req.body.id && cartProduct.quantity==1){
                const index= cartProducts.findIndex(cartProduct=> cartProduct.id===req.body.id);
                cartProducts.splice(index,1);
            }
        });
    fs.writeFile(CART_DATA_FILE,JSON.stringify(cartProducts,null,4),()=>{
        res.setHeader('Cache-Control','no-cache');
        res.json(cartProducts);
      });
    });
}),
/*app.post('/cart',(req,res)=>{
    fs.readFile(CART_DATA_FILE,(err,data)=>{
        const cartProducts=JSON.parse(data);
        const newCartProduct={
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image_tag: req.body.image_tag,
            quantity:1
        };
        let cartProductExists=false;
        cartProducts.map((cartProduct)=>{
            if(cartProduct.id===newCartProduct.id){
                cartProduct.quantity++;
                cartProductExists=true;
            }
        });
        if(!cartProductExists) 
          cartProducts.push(newCartProduct);
    fs.writeFile(CART_DATA_FILE,JSON.stringify(cartProducts,null,4),()=>{
        res.setHeader('Cache-Control','no-cache');
        res.json(cartProducts);
    });
  });
}) */

app.listen(3000,()=>{
       console.log("Server is running on port 3000");
  });
