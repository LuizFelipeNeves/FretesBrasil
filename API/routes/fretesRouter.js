/* eslint-disable no-nested-ternary */
const { Router } = require('express');

const fretes = require('../controllers/fretes');

const fretesRouter = Router();

// routes apenas consulta!
fretesRouter.get('/veiculos/', async (req, res) => res.json({ data: await fretes.ListData(req.query, 'veiculo') }));
fretesRouter.get('/carroceria/', async (req, res) => res.json({ data: await fretes.ListData(req.query, 'carroceria') }));
fretesRouter.get('/estadoso', async (req, res) => res.json({ data: await fretes.ListData(req.query, 'estadoorigem') }));
fretesRouter.get('/estadosd', async (req, res) => res.json({ data: await fretes.ListData(req.query, 'estadodestino') }));

// criação de frete
fretesRouter.post('/fretes/', async (req, res) => res.json({ data: await fretes.Insertdb(req.body) }));

fretesRouter.get('/cidadeo/', async (req, res) => {
  if (!req.query.estadoorigem) res.json({ err: 'Insira o estado: query string!' });
  return res.json({ data: await fretes.ListCidades(req.query, 'cidadeorigem') });
});

fretesRouter.get('/cidaded/', async (req, res) => {
  if (!req.query.estadodestino) res.json({ err: 'Insira o estado: query string!' });
  return res.json({ data: await fretes.ListCidades(req.query, 'cidadedestino') });
});

fretesRouter.post('/filtro/', async (req, res) => {
  // Filtros
  const filtro = {};
  const err = [];

  if (req.body.estadoorigem) {
    filtro.estadoorigem = req.body.estadoorigem;
    if (req.body.cidadeorigem) filtro.cidadeorigem = req.body.cidadeorigem;
  } else if (req.body.cidadedestino) err.push('Insira o estado de origem');

  if (req.body.estadodestino) {
    filtro.estadodestino = req.body.estadodestino;
    if (req.body.cidadedestino) filtro.cidadedestino = req.body.cidadedestino;
  } else if (req.body.cidadedestino) err.push('Insira o estado de destino');

  if (req.body.veiculo) filtro.veiculo = req.body.veiculo;
  if (req.body.carroceria) filtro.carroceria = req.body.carroceria;

  // Busca os Itens
  const page = req.body.page ? req.body.page > 0 ? req.body.page : 1 : 1;
  const data = await fretes.Listdb(filtro, page, 20);
  const maxitens = await fretes.Finddb(filtro);
  await res.json({ data, maxitens, err });
});

module.exports = fretesRouter;
