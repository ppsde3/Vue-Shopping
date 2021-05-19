module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
     cartId:{
       type:Sequelize.INTEGER,
       allowNull: true
    },
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
    return Product;
  };