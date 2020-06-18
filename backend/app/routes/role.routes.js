const { authJwt } = require("../middlewares");
const Controller = require("../controllers/role.controller");


module.exports = function (app) {
   
    app.get('/api/role',Controller.getRole);
 
  }