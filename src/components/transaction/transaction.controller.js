const { TransactionService } = require("./transaction.service");


/**
 * Returns a set of request handlers
 * @param { TransactionService } service - The Transaction service
 * @returns 
 */
const TransactionControllerFactory = (service) => {

    return {
        async createTransaction(req, res, next) {
            try {
               const transaction = await service.create(req.body);

               res.status(201).json({
                   status: 'success',
                   message: 'Transaction was created successfully',
                   data: transaction,
               });
            } catch (error) {
                next(error);
            }
        },

        async getTransactions(req, res, next) {
            const { query } = req;

            try {
               const transactions = await service.findAll({ query });

               res.status(201).json({
                   status: 'success',
                   message: 'Query successful',
                   data: transactions,
               });
            } catch (error) {
                next(error);
            }
        }
    };
}

exports.TransactionControllerFactory = TransactionControllerFactory;
