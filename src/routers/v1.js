const { Router } = require("express");
const { transactionRouter } = require("../components/transaction");
const { userRouter } = require("../components/user");

const router = Router();

router.use('/users', userRouter);
router.use('/transactions', transactionRouter);

exports.v1Router = router;