const { authJwt } = require("../middlewares");
const PaymentController = require("../controllers/payment.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get('/payment',PaymentController.getPayment);
    app.get('/payment/:_id',PaymentController.getPaymentId);
    app.put('/payment/putPayment',PaymentController.putPayment); 
    app.delete('/payment/deletePayment/:_id',PaymentController.deletePaymentById);
    app.post('/payment',PaymentController.postPayment); 
  }