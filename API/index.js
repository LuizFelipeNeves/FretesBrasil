const express = require('express');
const fretesRouter = require('./routes/fretesRouter');
const authRouter = require('./routes/authRouter');
const usuarioRouter = require('./routes/usuarioRouter');
const contactRouter = require('./routes/contactRouter');

const api = express();

// You may add api specific middlewares here

api.use('/fretes', fretesRouter);
api.use('/auth', authRouter);
api.use('/admin', usuarioRouter);
api.use('/contact', contactRouter);

module.exports = api;
