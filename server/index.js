require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('./database');
const authRoutes = require('./routes/auth');
const paymentsRoutes = require('./routes/payments');
const servicesRoutes = require('./routes/services');
const adminRoutes = require('./routes/admin');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/payments', paymentsRoutes);
app.use('/services', servicesRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;
