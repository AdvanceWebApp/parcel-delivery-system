const { authJwt } = require("../middlewares");
const AssingmentController = require("../controllers/assignment.controller");


module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get('/assingment',AssingmentController.getAssignment);
    app.get('/assingment/:_id',AssingmentController.getAssignmentId);
    app.put('/assingment/putAssingment',AssingmentController.putAssignment); 
    app.delete('/assingment/:_id',AssingmentController.deleteAssignmentById);
    app.post('/assingment',AssingmentController.postAssignment); 
  }