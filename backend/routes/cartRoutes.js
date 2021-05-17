module.exports = app => {
    const cart = require("../controller/cartController");
    var router = require("express").Router();
    router.post("/addCart", cart.create);
    router.get("/cart", cart.findAll);
    router.delete("/delete",cart.delete);
    router.delete('/cart/delete/All',cart.deleteAll);
    app.use('/', router);
  };