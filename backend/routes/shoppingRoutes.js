module.exports = app => {
    const product = require("../controller/shoppingController");
    var router = require("express").Router();
  
    router.post("/add", product.create);
  
    router.get("/products", product.findAll);
  
    app.use('/', router);
  };