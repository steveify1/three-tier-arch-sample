const { BadRequestError } = require('../../shared/errors/BadRequestError');
const { TransactionService } = require('../transaction/transaction.service');
const UserModel = require('./user.model');

class UserService {
    model = UserModel;
    /**
     * @type { TransactionService }
     */
    transactionService;

    constructor(transactionService) {
        this.transactionService = transactionService;
    }

    /**
     * Creates a user
     * 
     * @param { object } input - An object containing data required for creating a user
     */
    async create(input) {
        const userWithSameEmail = await this.model.findOne({ email: input.email });

        if (userWithSameEmail) {
            throw new BadRequestError('Email already exists');
        }

        return this.model.create(input);
    }

    async getTransactions(id) {
        return this.transactionService.findAll({ query: { userId: id } });
    }
}

exports.UserService = UserService;
