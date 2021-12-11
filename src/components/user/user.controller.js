const { UserService } = require("./user.service");


/**
 * Returns a set of request handlers
 * @param { UserService } service - The user service
 * @returns 
 */
const UserControllerFactory = (service) => {

    return {
        async createUser(req, res, next) {
            try {
               const user = await service.create(req.body);

               res.status(201).json({
                   status: 'success',
                   message: 'User was created successfully',
                   data: user,
               });
            } catch (error) {
                next(error);
            }
        },

        async getUserTransactions(req, res, next) {
            try {
               const transactions = await service.getTransactions(req.params.id);

               res.status(200).json({
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

exports.UserControllerFactory = UserControllerFactory;
