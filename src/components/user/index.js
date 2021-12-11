const { TransactionService } = require("../transaction/transaction.service");
const { UserControllerFactory } = require("./user.controller");
const { UserRouter } = require("./user.router");
const { UserService } = require("./user.service");

const transactionService = new TransactionService();
const userService = new UserService(transactionService);
const userController = UserControllerFactory(userService);
exports.userRouter = UserRouter(userController);
