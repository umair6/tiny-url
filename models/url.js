const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  urlCode: { type: String, required: true, unique: true },
  longUrl: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', // Replace with your actual user model name
    required: true
  },
  clicks: [{
    timestamp: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const URL = mongoose.model('URL', urlSchema); // Capitalized model name by convention

module.exports = { URL };

