const express = require('express');
const fretesRouter = require('./routes/fretesRouter');
const authRouter = require('./routes/authRouter');
const usuarioRouter = require('./routes/usuarioRouter');

const api = express();

// You may add api specific middlewares here
// TODO: move all controllers in the src/api/controllers folder

api.use('/fretes', fretesRouter);
api.use('/auth', authRouter);
api.use('', usuarioRouter);

module.exports = api;
