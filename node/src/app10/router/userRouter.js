const Router = require('@koa/router');
const userRouter = new Router();
const userController = require('../controller/userController');
const userServerUrlMappingResolver = require('../config/server/userServerUrlMappingResolver');

userRouter.post(userServerUrlMappingResolver.login, userController.login);

module.exports = userRouter;