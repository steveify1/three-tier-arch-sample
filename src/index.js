const express = require('express');
const mongoose = require('mongoose');
const env = require('./shared/utils/env');
const routers = require('./routers');
const { NotFoundError } = require('./shared/errors/NotFoundError');

const app = express();

app.use(express.json());

app.use('/api', routers);

app.use((req, res, next) => {
    next(new NotFoundError('Enpoint not found'));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.statusCode ? err.message : 'Internal Server Error';

    console.error(err);

    res.status(statusCode).json({
        status: 'error',
        message,
    });
});

const PORT = env("PORT") || 4000;

mongoose.connect(env('DB_URL'))
    .then(() => {
        console.log('DB connection was successful');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(e => console.log('DB connection error', e));
