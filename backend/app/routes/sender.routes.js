const { authJwt } = require("../middlewares");
const SenderController = require("../controllers/sender.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get('/sender',
    SenderController.getSender);
    app.get('/sender/:_id',
    SenderController.getSenderId);
    app.put('/sender/putSender',
    SenderController.putSender); 
    app.delete('/sender/:_id',
    SenderController.deleteSenderById);
    app.post('/sender',SenderController.postSender); 
  }

/*
router.get('/sender', SenderController.getSender);

router.get('/sender/:Sid', SenderController.getSenderId);

router.post('/sender', SenderController.postSender);

router.put('/sender/:Sid', SenderController.putSender);

router.delete('/sender/:Sid', SenderController.deleteSenderById);

module.exports = router;*/
