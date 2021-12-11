const { TransactionControllerFactory } = require("./transaction.controller");
const { TransactionRouter } = require("./transaction.router");
const { TransactionService } = require("./transaction.service");

const transactionService = new TransactionService();
const transactionController = TransactionControllerFactory(transactionService);
exports.transactionRouter = TransactionRouter(transactionController);
