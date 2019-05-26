/* eslint-disable no-nested-ternary */
const { Router } = require('express');
// const usuario = require('../controllers/usuario');
const authMiddleware = require('../middlewares/auth');

const usuarioRouter = Router();
usuarioRouter.use(authMiddleware);

// routes apenas consulta!
usuarioRouter.get('/teste/', async (req, res) => res.send({ ok: true, user: req.userId }));

module.exports = usuarioRouter;
