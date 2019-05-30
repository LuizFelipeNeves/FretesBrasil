/* eslint-disable no-nested-ternary */
const { Router } = require('express');

const contact = require('../controllers/contact');

const contactRouter = Router();

// criação
contactRouter.post('/', async (req, res) => res.json({ data: await contact.Insertdb(req.body) }));

module.exports = contactRouter;
