const { products, cart } = require("../models");
const db = require("../models");
const Cart = db.cart;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Cart.create({})
    .then(cart => {
      console.log(req.body);
     products.create({
        name: req.body.name,
        title:req.body.title,
        description: req.body.description,
        price:req.body.price,
        cartId:cart.id
      }).then(data=>{
       res.send(data);
    })
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

exports.findAll = (req, res) => {
  console.log(req.body.id);
  //const title = req.body.id;
 // var condition = id ? { id: { [Op.like]: `%${title}%` } } : null;
  Cart.findAll({include:products })
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
  exports.delete=(req,res)=>{
    const id = req.params.id;
    Cart.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product with id=" + id
        });
      });
  };
    exports.deleteAll = (req, res) => {
      Cart.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Cart were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Carts."
          });
        });
    };

