const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  console.log(req.body.cartId);
  const product = {
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price
    
  };

  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Product.findAll({ where: condition })
    .then(data => {
     res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Product."
      });
    });
};
