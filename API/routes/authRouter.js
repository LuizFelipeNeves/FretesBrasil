/* eslint-disable no-underscore-dangle */
const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../controllers/auth');

require('dotenv').load();

const authRouter = Router();

function generationToken(params = {}) {
  return jwt.sign(params, process.env.SECRET, { expiresIn: 86400 });
}

authRouter.post('/registro', async (req, res) => {
  try {
    if (await User.Checkdb(req.body.email)) return res.status(400).send({ error: 'Email já cadastrado' });
    const user = await User.Insertdb(req.body);
    return res.send({ user, token: generationToken({ id: user._id, role: user.role }) });
  } catch (err) {
    await console.log(err);
    return res.status(400).send({ error: 'Registration failed' });
  }
});

authRouter.post('/autenticacao', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.getUserComplete(email);

  if (!user) return res.status(400).send({ error: 'User not found' });

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: 'Invalid Passwors' });
  }
  user.password = undefined;

  return res.send({
    user,
    token: generationToken({ id: user.id, role: user.role }),
  });
});

module.exports = authRouter;