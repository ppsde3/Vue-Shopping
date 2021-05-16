module.exports = app => {
    const shopping = require("../controller/shoppingController");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", shopping.create);
  
    // Retrieve all Tutorials
    router.get("/products", shopping.findAll);
  
    app.use('/', router);
  };