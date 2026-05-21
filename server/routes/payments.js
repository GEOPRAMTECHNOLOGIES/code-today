const express = require('express');
const { Payment } = require('../models');
const auth = require('../middleware/auth');
const mpesa = require('../services/mpesa');

const router = express.Router();

router.post('/stkpush', auth, async (req, res) => {
  const { phone, amount, serviceId } = req.body;
  if (!phone || !amount) {
    return res.status(400).json({ message: 'Phone and amount are required' });
  }

  try {
    const result = await mpesa.stkPush({
      phone,
      amount,
      accountRef: req.user.id,
      transactionDesc: 'Service payment'
    });

    const payment = await Payment.create({
      user: req.user.id,
      service: serviceId || null,
      amount,
      status: 'pending',
      provider: 'mpesa',
      metadata: result
    });

    res.json({ paymentId: payment._id, result });
  } catch (error) {
    res.status(500).json({ message: 'STK Push request failed', error: error.message || error });
  }
});

router.post('/callback', async (req, res) => {
  console.log('MPESA callback data:', req.body);
  res.json({ received: true });
});

module.exports = router;
