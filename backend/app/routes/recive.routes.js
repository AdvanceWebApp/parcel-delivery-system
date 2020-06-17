const { authJwt } = require("../middlewares");
const ReciveController = require("../controllers/recive.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get('/recive',ReciveController.getRecive);
    app.get('/recive/:_id',ReciveController.getReciveId);
    app.put('/recive/putRecive',ReciveController.putRecive); 
    app.delete('/recive/:_id',ReciveController.deleteReciveById);
    app.post('/recive',ReciveController.postRecive); 
  }