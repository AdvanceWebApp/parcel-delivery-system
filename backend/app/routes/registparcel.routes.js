const { authJwt } = require("../middlewares");
const RegistparcelController = require("../controllers/registparcel.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get('/registparcel',RegistparcelController.getRegistparcel);
    app.get('/registparcel/:_id',RegistparcelController.getRegistparcelId);
    app.put('/registparcel/putRegistparcel',RegistparcelController.putRegistparcel); 
    app.delete('/registparcel/:_id',RegistparcelController.deleteRegistparcelById);
    app.post('/registparcel',RegistparcelController.postRegistparcel); 
  }