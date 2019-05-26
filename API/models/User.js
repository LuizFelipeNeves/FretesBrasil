/* eslint-disable func-names */
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcryptjs');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const UserSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  telephone: {
    type: Number,
  },
  role: {
    type: Number,
    default: 0,
  },
}, { _id: false, timestamps: { createdAt: 'created_at' } });

UserSchema.plugin(AutoIncrement, { id: 'usuarios', inc_field: '_id' });

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
