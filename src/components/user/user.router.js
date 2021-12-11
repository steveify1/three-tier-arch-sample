const { Router } = require('express');

const UserRouter = (controller) => {
    const router = Router();

    router.route('/')
        .post(controller.createUser);

    router.get('/:id/transactions', controller.getUserTransactions);

    return router;
}

exports.UserRouter = UserRouter;
