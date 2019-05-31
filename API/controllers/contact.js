/* eslint-disable no-console */

const mongoose = require('mongoose');

const contact = require('../models/Contact');

require('dotenv').config();

// BDCONFIG= URL

mongoose.connect(process.env.BDCONFIG, { useNewUrlParser: true });

module.exports = {
  async Insertdb(body) {
    return contact.create(body);
  },
};
