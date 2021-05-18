module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
        cartId:{
          type: Sequelize.INTEGER
        }
    });
    return Cart;
  };