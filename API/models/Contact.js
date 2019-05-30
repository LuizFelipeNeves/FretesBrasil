const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const AutoIncrement = require('mongoose-sequence')(mongoose);

const ContactSchema = new mongoose.Schema({
  _id: Number,
  nome: String,
  sobrenome: String,
  email: String,
  telefone: String,
  assunto: String,
  status: {
    type: Boolean,
    default: false,
  },
}, { _id: false, timestamps: { createdAt: 'created_at' } });

ContactSchema.plugin(AutoIncrement, { id: 'contact', inc_field: '_id' });
module.exports = mongoose.model('Contact', ContactSchema);
