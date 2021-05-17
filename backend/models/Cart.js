module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define("cart", {
      title: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      }
    });
    return Cart;
  };