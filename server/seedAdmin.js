require('dotenv').config();
const bcrypt = require('bcryptjs');
const mongoose = require('./database');
const User = require('./models/User');

const run = async () => {
  const email = process.env.ADMIN_EMAIL || 'admin@example.com';
  const password = process.env.ADMIN_PASSWORD || 'ChangeMe123!';

  const existing = await User.findOne({ email });
  if (existing) {
    console.log('Admin user already exists:', email);
    process.exit(0);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = await User.create({
    name: 'Administrator',
    email,
    password: hashedPassword,
    role: 'admin'
  });

  console.log('Seeded admin user:', admin.email);
  process.exit(0);
};

run().catch((err) => {
  console.error('Failed to seed admin user:', err);
  process.exit(1);
});
