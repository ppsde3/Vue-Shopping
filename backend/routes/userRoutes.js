const { authJwt } = require("../middleware");
const controller = require("../controller/userController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/all", controller.allAccess);

  app.get("/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get("/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
