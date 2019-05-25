const express = require('express');
const fretesRouter = require('./routes/fretesRouter');

const api = express();

// You may add api specific middlewares here
// TODO: move all controllers in the src/api/controllers folder

api.use('/fretes', fretesRouter);

module.exports = api;
