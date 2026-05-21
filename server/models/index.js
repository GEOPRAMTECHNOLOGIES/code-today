const mongoose = require('mongoose');
const User = require('./User');
const Service = require('./Service');
const Payment = require('./Payment');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  publishedAt: { type: Date, default: Date.now }
});

const testimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const settingsSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: mongoose.Schema.Types.Mixed,
  updatedAt: { type: Date, default: Date.now }
});

const activityLogSchema = new mongoose.Schema({
  event: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  metadata: Object,
  createdAt: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', projectSchema);
const Blog = mongoose.model('Blog', blogSchema);
const Testimonial = mongoose.model('Testimonial', testimonialSchema);
const Settings = mongoose.model('Settings', settingsSchema);
const ActivityLog = mongoose.model('ActivityLog', activityLogSchema);

module.exports = {
  User,
  Service,
  Payment,
  Project,
  Blog,
  Testimonial,
  Settings,
  ActivityLog
};
