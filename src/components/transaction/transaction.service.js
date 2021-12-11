const { BadRequestError } = require('../../shared/errors/BadRequestError');
const TransactionModel = require('./transaction.model');

class TransactionService {
    model = TransactionModel;

    /**
     * Creates a transaction
     * 
     * @param { object } input - An object containing data required for creating a transaction
     */
    async create(input) {
        return this.model.create(input);
    }

    buildFilter(query) {
        const filter = {};

        if (query.userId) {
            filter['userId'] = query.userId;
        }

        return filter;
    }

    async findAll(options) {
        const { query } = options;
        const filter = this.buildFilter(query);
        return this.model.find(filter);
    }
}

exports.TransactionService = TransactionService;
