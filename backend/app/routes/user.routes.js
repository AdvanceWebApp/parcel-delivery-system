const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // TODO : USER
  // !! Pass
  app.get('/api/user/getUser',
    controller.getUser);
  app.put('/api/user/putUser', 
    controller.putUser);

  // TODO : ADMIN
  app.get('/api/admin/getStaffAllByAdmin', 
    controller.getStaffAllByAdmin);
  app.get('/api/admin/getUserAllByAdmin', 
    controller.getUserAllByAdmin);  
  app.put('/api/admin/putById/:_id',
    controller.putById);
  app.delete('/api/admin/deleteUserById/:_id', 
    controller.deleteUserById);

  // TODO : DELIVERY STAFF
  app.get('/api/delivery/getDelivery', [authJwt.verifyToken, authJwt.isDeliveryStaff],
    controller.getUser);
  app.put('/api/delivery/putDelivery', [authJwt.verifyToken, authJwt.isDeliveryStaff],
    controller.putUser);

  // TODO : REGISTERED STAFF
  app.get('/api/registered/getAllByStaff',
    controller.getDeliveryAllByRegistered);
  app.get('/api/registered/getRegistered', 
    controller.getUser);
  app.put('/api/registered/putRegistered', [authJwt.verifyToken, authJwt.isRegisteredStaff],
    controller.putUser); 
}