/* eslint-disable no-console */

const mongoose = require('mongoose');

const Frete = require('../models/Frete');

require('dotenv').config();

// BDCONFIG= URL

mongoose.connect(process.env.BDCONFIG, { useNewUrlParser: true });

module.exports = {
  async Insertdb(body) {
    return Frete.create(body);
  },
  async Deletedb(url) {
    await Frete.deleteOne({ url });
  },
  async Checkdb(url) {
    return await Frete.countDocuments({ url }) > 0;
  },
  async Listdb(query, pages, perPage) {
    return Frete.find(query).skip(perPage * (pages - 1)).limit(perPage);
  },
  async Finddb(query) {
    return Frete.countDocuments(query);
  },
  async ListData(query = {}, string) {
    // const data = await Frete.find(query).distinct('veiculo');
    // return data.sort();

    const teste = await Frete.aggregate([
      // { $project: { _id: 0, veiculo: 1 } },
      { $match: query },

      // https://docs.mongodb.com/manual/reference/operator/aggregation/unwind
      { $unwind: `$${string}` },

      // https://docs.mongodb.com/manual/reference/operator/aggregation/group
      { $group: { _id: `$${string}`, total: { $sum: 1 } } },

      { $project: { _id: 0, nome: '$_id', total: 1 } },

      // https://docs.mongodb.com/manual/reference/operator/aggregation/sort
      { $sort: { nome: 1 } },

      // { $limit: 10 },
    ], (err, res) => {
      if (err) return ({ err });
      return res;
    })
      .then(x => x)
      .catch(err => err);
    return teste;
  },
  async ListCidades(query, string) {
    const data = await Frete.find(query).distinct(string); // cidadeorigem - cidadedestino
    return data.sort();
  },
};
