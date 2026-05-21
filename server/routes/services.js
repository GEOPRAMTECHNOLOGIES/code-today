const express = require('express');
const auth = require('../middleware/auth');
const adminOnly = require('../middleware/admin');
const { Service } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  const services = await Service.find({ active: true }).sort({ createdAt: -1 });
  res.json(services);
});

router.post('/', auth, adminOnly, async (req, res) => {
  const service = await Service.create(req.body);
  res.json(service);
});

module.exports = router;
