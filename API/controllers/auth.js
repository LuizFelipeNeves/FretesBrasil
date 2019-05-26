/* eslint-disable no-console */

const mongoose = require('mongoose');

const User = require('../models/User');

require('dotenv').load();

// BDCONFIG= URL

mongoose.connect(process.env.BDCONFIG, { useNewUrlParser: true });

module.exports = {
  async Insertdb(body) {
    return User.create(body);
  },
  async Deletedb(email) {
    await User.deleteOne({ email });
  },
  async Checkdb(email) {
    return await User.countDocuments({ email }) > 0;
  },
  async getUserComplete(email) {
    return User.findOne({ email }).select('+password');
  },
};
