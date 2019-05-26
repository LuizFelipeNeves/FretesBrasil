/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');

const api = require('./API');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(cors());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use((error, req, res, next) => {
    if (error !== null) return res.json({ err: ['invalid json'] });
    return next();
  });

  server.use('/api', api); // api

  server.get('/', (req, res) => app.render(req, res, '/', req.query));
  server.get('/contato', (req, res) => app.render(req, res, '/contato', req.query));
  server.get('/fretes', (req, res) => app.render(req, res, '/fretes'));
  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
