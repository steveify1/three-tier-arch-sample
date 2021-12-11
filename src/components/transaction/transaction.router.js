const { Router } = require('express');

const TransactionRouter = (controller) => {
    const router = Router();

    router.route('/')
        .post(controller.createTransaction)
        .get(controller.getTransactions);

    return router;
}

exports.TransactionRouter = TransactionRouter;
